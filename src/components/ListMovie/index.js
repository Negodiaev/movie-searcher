import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, Typography, List, ListItem } from "@material-ui/core";
import ButtonFavorite from "./ButtonFavorite";
import useStyles from "./styles";

export default function ListMovie(props) {
    const { movie, genres, toggleFavorites } = props;
    const poster = !!movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+poster";

    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Link to={`movie/${movie.id}`} className={classes.link}>
                <Card className={classes.card}>
                    <CardMedia image={poster} />
                    <div className={classes.details}>
                        <Typography variant="h5" component="p" align="center">
                            {movie.title}
                        </Typography>
                        <Typography className={classes.genres} component="div">
                            <List className={classes.genresList} dense disablePadding>
                                {movie.genre_ids
                                    .map(genreId => {
                                        return genres.map(genre => {
                                            return genreId === genre.id ? genre.name : null;
                                        });
                                    })
                                    .map(item => item.filter(item => (item ? item : null)))
                                    .map((item, idx) => (
                                        <ListItem key={`genre-${idx + 1}`} disableGutters>
                                            {item}
                                        </ListItem>
                                    ))}
                            </List>
                        </Typography>
                    </div>
                </Card>
            </Link>
            <ButtonFavorite movie={movie} toggleFavorites={toggleFavorites} />
        </div>
    );
}
