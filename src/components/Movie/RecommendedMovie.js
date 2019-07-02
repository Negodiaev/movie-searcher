import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardMedia, List, ListItem, ListItemText } from "@material-ui/core";
import styles from "./styles";

export default function RecommendedMovie(props) {
    const { movie, genres } = props;

    return (
        <div>
            <Card style={styles.card}>
                <Link to={`/movie/${movie.id}`}>
                    <CardMedia image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </Link>
                {/* <div className={styles.movie}>
                    <Typography variant="h5" component="p" align="center">
                        {movie.title}
                    </Typography>
                    <Typography className={styles.genres} component="div">
                        <List className={styles.genresList} dense>
                            {movie.genre_ids
                                .map(genreId => {
                                    return genres.map(genre => {
                                        return genreId === genre.id ? genre.name : null;
                                    });
                                })
                                .map(item => item.filter(item => (item ? item : null)))
                                .map((item, idx) => (
                                    <ListItem key={`genre-${idx + 1}`}>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                        </List>
                    </Typography>
                </div> */}
            </Card>
        </div>
    );
}
