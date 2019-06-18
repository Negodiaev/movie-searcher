import React from "react";
import { Typography } from "@material-ui/core";
import SearchMovies from "../SearchMovies";

export default function Search(props) {
    const { genres, searchMovies, hasMoreMovies, loadMoreSearchResults } = props;

    return (
        <section>
            <Typography variant="h2" gutterBottom>
                Search results:
            </Typography>
            <SearchMovies
                genres={genres}
                movies={searchMovies}
                hasMore={hasMoreMovies}
                loadMoreSearchResults={loadMoreSearchResults}
            />
        </section>
    );
}
