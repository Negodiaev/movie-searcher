import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Home from "./components/Home";
import Search from "./components/Search";
import Movie from "./components/Movie";
import Favorites from "./components/Favorites";
import NoMatch from "./components/NoMatch";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import theme from "./theme";
import "./App.css";

const API_KEY = "61722a83638b42abbf0aec9d783d8587";

export default function App() {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasMoreMovies, setHasMoreMovies] = useState(true);
  const [isLoadingResults, setLoadingResults] = useState(false);

  useEffect(() => {
    fetchGenres();
  }, []);

  function fetchGenres() {
    const link = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

    fetch(link)
      .then((res) => res.json())
      .then(
        (result) => {
          setGenres(result.genres);
        },
        (error) => {
          console.log(error);
        },
      );
  }

  const handleSearch = useCallback(
    (searchQuery) => {
      setSearchQuery(searchQuery);

      if (isLoadingResults) {
        return;
      }

      if (searchQuery.length) {
        window.scrollTo(0, 0);
        fetchSearchResults(getPageNumber(searchMovies));
      } else {
        setPopularMovies([]);
        setHasMoreMovies(true);
      }
    },
    // eslint-disable-next-line
    [searchQuery, isLoadingResults, searchMovies],
  );

  const fetchPopularMovies = useCallback(() => {
    const page = getPageNumber(popularMovies);
    const link = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

    fetch(link)
      .then((res) => res.json())
      .then(
        (result) => {
          setPopularMovies(popularMovies.concat(result.results));
          setHasMoreMovies(checkMoreMovies(page, result.total_pages));
        },
        (error) => {
          console.log(error);
        },
      );
  }, [popularMovies]);

  const fetchSearchResults = useCallback(
    async (page) => {
      const link = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`;

      setLoadingResults(true);

      await fetch(link)
        .then((res) => res.json())
        .then(
          (result) => {
            setSearchMovies(result.results);
            setHasMoreMovies(result.total_pages > 1);
            navigate("/search");
          },
          (error) => {
            console.log(error);
          },
        )
        .finally(() => {
          setLoadingResults(false);
        });
    },
    // eslint-disable-next-line
    [navigate, searchMovies, searchQuery],
  );

  const loadMoreSearchResults = useCallback(() => {
    const page = getPageNumber(searchMovies);
    const link = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`;

    if (searchQuery.length) {
      fetch(link)
        .then((res) => res.json())
        .then(
          (result) => {
            setSearchMovies(searchMovies.concat(result.results));
            setHasMoreMovies(checkMoreMovies(page, result.total_pages));
          },
          (error) => {
            console.log(error);
          },
        );
    }
  }, [searchMovies, searchQuery]);

  function toggleFavorites(movie) {
    const movieId = movie.id;
    let favorites = JSON.parse(localStorage.getItem("favorites")) || {};

    if (favorites.hasOwnProperty(movieId)) {
      delete favorites[movieId];
    } else {
      favorites[movie.id] = movie;
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  const popularMoviesProps = { genres, hasMoreMovies, popularMovies };
  const searchMoviesProps = {
    genres,
    hasMoreMovies,
    searchMovies,
    searchQuery,
  };
  const favoriteMoviesProps = { genres };

  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppHeader searchQuery={searchQuery} onSearchChange={handleSearch} />
          <main className="main">
            <Routes>
              <Route
                path="/"
                exact
                Component={(routeProps) => (
                  <Home
                    {...routeProps}
                    {...popularMoviesProps}
                    loadPopularMovies={fetchPopularMovies}
                    toggleFavorites={toggleFavorites}
                  />
                )}
              />
              <Route
                path="/search"
                Component={(routeProps) => (
                  <Search
                    {...routeProps}
                    {...searchMoviesProps}
                    loadMoreSearchResults={loadMoreSearchResults}
                    toggleFavorites={toggleFavorites}
                  />
                )}
              />
              <Route
                path="/movie/:id"
                Component={(routeProps) => (
                  <Movie
                    {...routeProps}
                    genres={genres}
                    toggleFavorites={toggleFavorites}
                  />
                )}
              />
              <Route
                path="/favorites"
                Component={(routeProps) => (
                  <Favorites
                    {...routeProps}
                    {...favoriteMoviesProps}
                    toggleFavorites={toggleFavorites}
                  />
                )}
              />
              <Route component={NoMatch} />
            </Routes>
          </main>
          <AppFooter />
        </div>
      </MuiThemeProvider>
    </>
  );
}

function getPageNumber(movies) {
  return movies.length / 20 + 1;
}

function checkMoreMovies(page, totalPages) {
  return page < totalPages;
}
