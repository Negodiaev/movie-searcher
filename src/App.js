import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppHeader from "./components/AppHeader";
import Home from "./components/Home";
import Search from "./components/Search";
import NoMatch from "./components/NoMatch";
import theme from "./theme";
import "./App.css";

class App extends React.Component {
    state = {
        apiKey: "61722a83638b42abbf0aec9d783d8587",
        genres: [],
        popularMovies: [],
        searchMovies: [],
        searchQuery: "",
        hasMoreMovies: true,
        toSearch: false,
        backHome: false
    };

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
                this.setState({ searchMovies: [], toSearch: true, backHome: false }, () => {
                    this.fetchSearchResults();
                });
            } else {
                this.setState({ popularMovies: [], hasMoreMovies: true, toSearch: false, backHome: true });
            }
        });
    };

    fetchPopularMovies = page => {
        const { apiKey, popularMovies } = this.state;
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

    loadMoreSearchResults = page => {
        const { apiKey, searchQuery, searchMovies } = this.state;
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

    checkMoreMovies = (page, totalPages) => page < totalPages;

    componentDidMount() {
        this.fetchGenres();
    }

    render() {
        const { genres, popularMovies, searchMovies, hasMoreMovies, toSearch, backHome } = this.state;
        const popularMoviesProps = { genres, hasMoreMovies, popularMovies };
        const searchMoviesProps = { genres, hasMoreMovies, searchMovies };
        let redirectLink = toSearch ? "/search" : backHome ? "" : null;

        return (
            <React.Fragment>
                <Router>
                    {redirectLink !== null && <Redirect to={redirectLink} />}
                    <CssBaseline />
                    <MuiThemeProvider theme={theme}>
                        <div className="App">
                            <AppHeader onSearchChange={this.handleSearch} />
                            <Switch>
                                <Route
                                    path="/"
                                    exact
                                    render={routeProps => (
                                        <Home
                                            {...routeProps}
                                            {...popularMoviesProps}
                                            loadPopularMovies={this.fetchPopularMovies}
                                        />
                                    )}
                                />
                                <Route
                                    path="/search"
                                    render={routeProps => (
                                        <Search
                                            {...routeProps}
                                            {...searchMoviesProps}
                                            loadMoreSearchResults={this.loadMoreSearchResults}
                                        />
                                    )}
                                />
                                <Route component={NoMatch} />
                            </Switch>
                            <footer className="App-footer">Footer</footer>
                        </div>
                    </MuiThemeProvider>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
