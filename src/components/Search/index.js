import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const isNotCharacters = !searchQuery.length || /[^A-z]/gi.test(searchQuery);

  useEffect(() => {
    if (!searchQuery) {
      navigate("/");
    }
  }, [navigate, searchQuery]);

  if (!searchMovies.length && (searchQuery.length > 1 || isNotCharacters)) {
    return (
      <p style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}>
        No search results...
      </p>
    );
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
