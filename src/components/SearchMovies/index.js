import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Container, Grid, CircularProgress } from "@material-ui/core";
import ListMovie from "../ListMovie";

export default function SearchMovies(props) {
    const { genres, movies, hasMore, loadMoreSearchResults } = props;

    if (!movies.length) {
        return "No movies";
    }

    return (
        <Container>
            <InfiniteScroll
                pageStart={1}
                loadMore={loadMoreSearchResults}
                hasMore={hasMore}
                loader={<CircularProgress className="loader" key={0} />}
                threshold={100}
            >
                <Grid container spacing={2}>
                    {movies.map((movie, idx) => (
                        <Grid item xs={6} sm={4} md={3} key={idx + 1}>
                            <ListMovie movie={movie} genres={genres} />
                        </Grid>
                    ))}
                </Grid>
            </InfiniteScroll>
        </Container>
    );
}
