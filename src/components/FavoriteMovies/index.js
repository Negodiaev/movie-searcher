import React from "react";
import { Container, Grid } from "@material-ui/core";
import ListMovie from "../ListMovie";

export default class FavoriteMovies extends React.Component {
    state = {
        movies: JSON.parse(localStorage.getItem("favorites")) || {}
    };

    updateFavorites = () => this.setState({ movies: JSON.parse(localStorage.getItem("favorites")) || {} });

    render() {
        const { genres, toggleFavorites } = this.props;
        const moviesObj = this.state.movies;
        const moviesNumber = Object.keys(moviesObj).length;
        let movies =
            moviesNumber &&
            Object.keys(moviesObj)
                .map(key => moviesObj[key])
                .sort((a, b) => b.popularity - a.popularity);

        return (
            <Container maxWidth="xl">
                {movies.length ? (
                    <Grid container spacing={2}>
                        {movies.map((movie, idx) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={idx + 1}>
                                <ListMovie
                                    movie={movie}
                                    genres={genres}
                                    buttonCloser
                                    toggleFavorites={toggleFavorites}
                                    updateFavorites={this.updateFavorites}
                                />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    "Your favorite movies list is empty"
                )}
            </Container>
        );
    }
}
