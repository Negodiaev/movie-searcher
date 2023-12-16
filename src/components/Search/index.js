import React from "react";
import { Typography, Container } from "@material-ui/core";
import SearchMovies from "../SearchMovies";

export default function Search(props) {
  const {
    genres,
    searchMovies,
    searchQuery,
    hasMoreMovies,
    loadMoreSearchResults,
    toggleFavorites,
  } = props;
  const isNotCharacters = !searchQuery.length || /[^A-z]/gi.test(searchQuery);

  if (!searchMovies.length && (searchQuery.length > 1 || isNotCharacters)) {
    return "No movies";
  }

  return (
    <section className="content-section">
      <Container maxWidth="xl">
        <Typography variant="h1" gutterBottom>
          Search results for "{searchQuery}":
        </Typography>
      </Container>
      <SearchMovies
        genres={genres}
        movies={searchMovies}
        hasMore={hasMoreMovies}
        loadMoreSearchResults={loadMoreSearchResults}
        toggleFavorites={toggleFavorites}
      />
    </section>
  );
}
