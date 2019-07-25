import React from "react";
import { Container, Typography } from "@material-ui/core";
import FavoriteMovies from "../FavoriteMovies";

export default function Favorites(props) {
    const { genres, toggleFavorites } = props;

    return (
        <section className="content-section" spacing={2}>
            <Container maxWidth="xl">
                <Typography variant="h1" gutterBottom>
                    Favorite movies
                </Typography>
            </Container>
            <FavoriteMovies genres={genres} toggleFavorites={toggleFavorites} />
        </section>
    );
}
