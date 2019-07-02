import React from "react";
import { Typography, Container } from "@material-ui/core";
import PopularMovies from "../PopularMovies";

export default function Home(props) {
    const { genres, popularMovies, hasMoreMovies, loadPopularMovies } = props;

    return (
        <section className="content-section" spacing={2}>
            <Container maxWidth="xl">
                <Typography variant="h1" gutterBottom>
                    Popular today
                </Typography>
            </Container>
            <PopularMovies
                genres={genres}
                movies={popularMovies}
                hasMore={hasMoreMovies}
                loadPopularMovies={loadPopularMovies}
            />
        </section>
    );
}
