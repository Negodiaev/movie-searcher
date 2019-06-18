import React from "react";
import { Typography, Container, AppBar, Toolbar, Link } from "@material-ui/core";
import Searchbar from "../Searchbar";
import useStyles from "./styles";

export default function AppHeader(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container>
                    <Toolbar disableGutters>
                        <Typography className={classes.title} variant="h3" component="h1">
                            <Link href="/" className={classes.titleLink}>
                                Movie Searcher
                            </Link>
                        </Typography>
                        <Searchbar classes={classes} onSearchChange={props.onSearchChange} />
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
