import React from "react";
import { Typography } from "@material-ui/core";
import PopularMovies from "../PopularMovies";

export default function Home(props) {
    const { genres, popularMovies, hasMoreMovies, loadPopularMovies } = props;

    return (
        <section>
            <Typography variant="h2" gutterBottom>
                Popular today
            </Typography>
            <PopularMovies
                genres={genres}
                movies={popularMovies}
                hasMore={hasMoreMovies}
                loadPopularMovies={loadPopularMovies}
            />
        </section>
    );
}
