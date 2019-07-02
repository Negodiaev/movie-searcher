import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, Typography, List, ListItem } from "@material-ui/core";
import useStyles from "./styles";

export default function Movie(props) {
    const { movie, genres } = props;
    const classes = useStyles();

    return (
        <Link to={`movie/${movie.id}`} className={classes.link}>
            <Card className={classes.card}>
                <CardMedia image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
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
    );
}