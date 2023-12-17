import React, { useEffect, useState } from "react";
import { CircularProgress, Container, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Heading from "./Heading";
import Details from "./Details";
import Recommendations from "./Recommendations";
import styles from "./styles";
import { useParams } from "react-router-dom";

const API_KEY = "61722a83638b42abbf0aec9d783d8587";

function Movie(props) {
  const { id } = useParams();
  const { genres, toggleFavorites } = props;
  const [details, setDetails] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!details && !isLoading) {
      fetchDetails(id);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!isLoading) {
      fetchDetails(id);
    }
    // eslint-disable-next-line
  }, [id]);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center" }}>
        <CircularProgress className="loader" />
      </div>
    );
  } else if (!details && !isLoading) {
    return <p style={{ textAlign: "center" }}>No data...</p>;
  }

  function fetchDetails(id, scrollToTop = false) {
    const link = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=recommendations`;

    setLoading(true);
    fetch(link)
      .then((res) => res.json())
      .then((result) => {
        setDetails(result);

        if (scrollToTop) {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const backgroundImage = details.backdrop_path
    ? `url(https://image.tmdb.org/t/p/w1280/${details.backdrop_path})`
    : "none";
  const recommendations = details.recommendations.results;

  return (
    <article
      className={props.classes.article}
      style={{ backgroundImage: backgroundImage }}
    >
      <Container maxWidth="xl">
        <section className={props.classes.content}>
          <Heading details={details} />
          <Divider />
          {Object.keys(details).length > 0 && (
            <Details
              details={details}
              collection={details.belongs_to_collection}
              toggleFavorites={toggleFavorites}
            />
          )}

          {details.recommendations.results?.length > 0 && (
            <Recommendations
              movies={recommendations}
              genres={genres}
              changeMovie={fetchDetails}
            />
          )}
        </section>
      </Container>
    </article>
  );
}

export default withStyles(styles)(Movie);
