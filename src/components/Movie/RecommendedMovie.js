import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia } from "@material-ui/core";
import styles from "./styles";

export default function RecommendedMovie(props) {
  const { movie } = props;

  return (
    <div>
      <Card style={styles.card}>
        <Link to={`/movie/${movie.id}`}>
          <CardMedia
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        </Link>
      </Card>
    </div>
  );
}
