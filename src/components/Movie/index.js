import React from "react";
import { Container, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Heading from "./Heading";
import Details from "./Details";
import Recommendations from "./Recommendations";
import styles from "./styles";

class Movie extends React.Component {
    state = {
        details: {}
    };

    fetchDetails = (id, scrollToTop = false) => {
        const link = `https://api.themoviedb.org/3/movie/${id}?api_key=61722a83638b42abbf0aec9d783d8587&language=en-US&append_to_response=recommendations`;

        fetch(link)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({ details: result }, () => {
                        scrollToTop && window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    });
                },
                error => {
                    console.log(error);
                }
            );
    };

    componentWillMount() {
        this.fetchDetails(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        const nextMovieId = nextProps.match.params.id;

        if (this.props.match.params.id !== nextMovieId) {
            this.fetchDetails(nextMovieId, true);
        }
    }

    render() {
        const { state, props } = this;
        const { details } = state;
        const { genres } = props;
        const backgroundImage = details.backdrop_path
            ? `url(https://image.tmdb.org/t/p/w1280/${state.details.backdrop_path})`
            : "none";
        const collection = Object.keys(details).length ? details.belongs_to_collection : null;
        const recommendations =
            details.recommendations && Object.keys(details.recommendations).length
                ? details.recommendations.results
                : null;

        return (
            <article className={props.classes.article} style={{ backgroundImage: backgroundImage }}>
                <Container maxWidth="xl">
                    <section className={props.classes.content}>
                        <Heading details={details} />
                        <Divider />
                        {Object.keys(details).length && <Details details={details} collection={collection} />}

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
