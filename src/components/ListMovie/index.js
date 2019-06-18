import React from "react";
import { Card, CardMedia } from "@material-ui/core";

export default function Movie(props) {
    const { movie, genres } = props;

    return (
        <Card>
            <CardMedia image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h4>{movie.title}</h4>
            <p>
                Genres:&nbsp;
                {movie.genre_ids
                    .map(genreId => {
                        return genres.map(genre => {
                            return genreId === genre.id ? genre.name : null;
                        });
                    })
                    .map(item => item.filter(item => (item ? item : null)))
                    .join(", ")}
            </p>
        </Card>
    );
}
