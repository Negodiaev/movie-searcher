import React from "react";
import { Container, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Heading from "./Heading";
import Details from "./Details";
import Recommendations from "./Recommendations";
import styles from "./styles";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTcyMmE4MzYzOGI0MmFiYmYwYWVjOWQ3ODNkODU4NyIsInN1YiI6IjVkMDNiMGFhMGUwYTI2MzMzYWQyMGY0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OPk5SaNfurhOYbFAhLQufo3XG-p2WhemPbTsng1CHzc";

class Movie extends React.Component {
  state = {
    details: {},
  };

  fetchDetails = (id, scrollToTop = false) => {
    const link = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=recommendations`;

    fetch(link)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ details: result }, () => {
            scrollToTop &&
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          });
        },
        (error) => {
          console.log(error);
        },
      );
  };

  componentWillMount() {
    !Object.keys(this.state.details).length &&
      this.fetchDetails(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    const nextMovieId = nextProps.match.params.id;

    if (this.props.match.params.id !== nextMovieId) {
      this.fetchDetails(nextMovieId, true);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.details.id !== this.state.details.id;
  }

  render() {
    const { state, props } = this;
    const { details } = state;
    const { genres, toggleFavorites } = props;
    const backgroundImage = details.backdrop_path
      ? `url(https://image.tmdb.org/t/p/w1280/${state.details.backdrop_path})`
      : "none";
    const collection = Object.keys(details).length
      ? details.belongs_to_collection
      : null;
    const recommendations =
      details.recommendations && Object.keys(details.recommendations).length
        ? details.recommendations.results
        : null;

    return (
      <article
        className={props.classes.article}
        style={{ backgroundImage: backgroundImage }}
      >
        <Container maxWidth="xl">
          <section className={props.classes.content}>
            <Heading details={details} />
            <Divider />
            {Object.keys(details).length && (
              <Details
                details={details}
                collection={collection}
                toggleFavorites={toggleFavorites}
              />
            )}

            {recommendations && recommendations.length ? (
              <Recommendations
                movies={recommendations}
                genres={genres}
                changeMovie={this.fetchDetails}
              />
            ) : null}
          </section>
        </Container>
      </article>
    );
  }
}

export default withStyles(styles)(Movie);
