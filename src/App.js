import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
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

class App extends React.Component {
    state = {
        apiKey: "61722a83638b42abbf0aec9d783d8587",
        genres: [],
        popularMovies: [],
        searchMovies: [],
        searchQuery: "",
        hasMoreMovies: true
    };

    isSearch = false;

    fetchGenres = () => {
        const { apiKey } = this.state;
        const link = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

        fetch(link)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({ genres: result.genres });
                },
                error => {
                    console.log(error);
                }
            );
    };

    handleSearch = searchQuery => {
        this.setState({ searchQuery: searchQuery }, () => {
            if (searchQuery.length) {
                window.scrollTo(0, 0);
                this.fetchSearchResults();
            } else {
                this.setState({ popularMovies: [], hasMoreMovies: true });
            }
        });
    };

    fetchPopularMovies = () => {
        const { apiKey, popularMovies } = this.state;
        const page = this.getPageNumber(popularMovies);

        const link = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;

        fetch(link)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        popularMovies: popularMovies.concat(result.results),
                        hasMoreMovies: this.checkMoreMovies(page, result.total_pages)
                    });
                },
                error => {
                    console.log(error);
                }
            );
    };

    fetchSearchResults = page => {
        const { apiKey, searchQuery } = this.state;
        const link = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`;

        fetch(link)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        searchMovies: result.results,
                        hasMoreMovies: result.total_pages > 1
                    });
                },
                error => {
                    console.log(error);
                }
            );
    };

    loadMoreSearchResults = () => {
        const { apiKey, searchQuery, searchMovies } = this.state;
        const page = this.getPageNumber(searchMovies);
        const link = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`;

        if (searchQuery.length) {
            fetch(link)
                .then(res => res.json())
                .then(
                    result => {
                        this.setState({
                            searchMovies: searchMovies.concat(result.results),
                            hasMoreMovies: this.checkMoreMovies(page, result.total_pages)
                        });
                    },
                    error => {
                        console.log(error);
                    }
                );
        }
    };

    getPageNumber = movies => movies.length / 20 + 1;

    checkMoreMovies = (page, totalPages) => page < totalPages;

    toggleFavorites = movie => {
        const movieId = movie.id;
        let favorites = JSON.parse(localStorage.getItem("favorites")) || {};

        if (favorites.hasOwnProperty(movieId)) {
            delete favorites[movieId];
        } else {
            favorites[movie.id] = movie;
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    componentDidMount() {
        this.fetchGenres();
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return !(nextState.searchQuery !== this.state.searchQuery);
    // }

    componentWillUpdate(nextProps, nextState) {
        this.isSearch = nextState.searchMovies !== this.state.searchMovies;
    }

    render() {
        const { genres, popularMovies, searchMovies, searchQuery, hasMoreMovies } = this.state;
        const popularMoviesProps = { genres, hasMoreMovies, popularMovies };
        const searchMoviesProps = { genres, hasMoreMovies, searchMovies, searchQuery };
        const favoriteMoviesProps = { genres };

        return (
            <React.Fragment>
                <CssBaseline />
                <MuiThemeProvider theme={theme}>
                    <div className="App">
                        <AppHeader searchQuery={searchQuery} onSearchChange={this.handleSearch} />
                        <main className="main">
                            <Switch>
                                {this.isSearch && <Redirect to="/search" />}
                                <Route
                                    path="/"
                                    exact
                                    render={routeProps => (
                                        <Home
                                            {...routeProps}
                                            {...popularMoviesProps}
                                            loadPopularMovies={this.fetchPopularMovies}
                                            toggleFavorites={this.toggleFavorites}
                                        />
                                    )}
                                />
                                <Route
                                    path="/search"
                                    render={routeProps =>
                                        !searchQuery.length ? (
                                            <Redirect to="/" />
                                        ) : (
                                            <Search
                                                {...routeProps}
                                                {...searchMoviesProps}
                                                loadMoreSearchResults={this.loadMoreSearchResults}
                                                toggleFavorites={this.toggleFavorites}
                                            />
                                        )
                                    }
                                />
                                <Route
                                    path="/movie/:id"
                                    render={routeProps => (
                                        <Movie
                                            {...routeProps}
                                            genres={genres}
                                            toggleFavorites={this.toggleFavorites}
                                        />
                                    )}
                                />
                                <Route
                                    path="/favorites"
                                    render={routeProps => (
                                        <Favorites
                                            {...routeProps}
                                            {...favoriteMoviesProps}
                                            toggleFavorites={this.toggleFavorites}
                                        />
                                    )}
                                />
                                <Route component={NoMatch} />
                            </Switch>
                        </main>
                        <AppFooter />
                    </div>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

export default withRouter(App);
