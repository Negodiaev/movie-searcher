import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Container, Grid, CircularProgress } from "@material-ui/core";
import ListMovie from "../ListMovie";

export default function PopularMovies(props) {
  const { genres, movies, hasMore, loadPopularMovies, toggleFavorites } = props;

  return (
    <Container maxWidth="xl">
      <InfiniteScroll
        pageStart={0}
        loadMore={loadPopularMovies}
        hasMore={hasMore}
        loader={
          <div style={{ textAlign: "center" }} key={0}>
            <CircularProgress className="loader" />
          </div>
        }
        threshold={100}
      >
        <Grid container spacing={2}>
          {movies.map((movie, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx + 1}>
              <ListMovie
                movie={movie}
                genres={genres}
                toggleFavorites={toggleFavorites}
              />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
}
