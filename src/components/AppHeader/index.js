import React from "react";
import {
    Typography,
    Container,
    Grid,
    Hidden,
    AppBar,
    Toolbar,
    Link,
    MenuList,
    MenuItem,
    IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Searchbar from "../Searchbar";
import useStyles from "./styles";

export default function AppHeader(props) {
    const classes = useStyles();
    const anchorRef = React.useRef(null);

    function handleToggle(e) {
        anchorRef.current.classList.toggle("active");
    }

    return (
        <React.Fragment>
            <AppBar className={classes.appBar}>
                <Toolbar disableGutters>
                    <Container maxWidth="xl">
                        <Grid container spacing={2} alignContent="center">
                            <Grid item xs={9} sm={6} md={4} className={classes.titleWrap}>
                                <Typography className={classes.title} variant="h4" component="div">
                                    <Link href="/" className={classes.titleLink}>
                                        Movie Searcher
                                    </Link>
                                </Typography>
                            </Grid>
                            <Hidden mdUp>
                                <Grid item xs={3} sm={6} md={false} className={classes.menuButtonWrap}>
                                    <IconButton
                                        edge="end"
                                        className={classes.menuButton}
                                        color="inherit"
                                        aria-label="Open drawer"
                                        onClick={handleToggle}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} md={8}>
                                <nav className={classes.navigation} ref={anchorRef}>
                                    <Searchbar
                                        classes={classes}
                                        searchQuery={props.searchQuery}
                                        onSearchChange={props.onSearchChange}
                                    />
                                    <MenuList className={classes.menu} disablePadding>
                                        <MenuItem>Popular</MenuItem>
                                        <MenuItem>Favorites</MenuItem>
                                    </MenuList>
                                </nav>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
    );
}
