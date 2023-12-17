import React from "react";
import { Link as RouterLink } from "react-router-dom";
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
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Searchbar from "../Searchbar";
import useStyles from "./styles";

export default function AppHeader(props) {
  const { isMenuOpened, searchQuery, onToggleMenu, onSearchChange } = props;
  const classes = useStyles();
  const anchorRef = React.useRef(null);

  function handleToggle() {
    anchorRef.current.classList.toggle("active");
    onToggleMenu();
  }

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar disableGutters>
          <Container maxWidth="xl">
            <Grid container spacing={2} alignContent="center">
              <Grid item xs={9} sm={6} md={4} className={classes.titleWrap}>
                <Typography
                  className={classes.title}
                  variant="h4"
                  component="div"
                >
                  <Link
                    to="/"
                    component={RouterLink}
                    className={classes.titleLink}
                  >
                    Movie Searcher
                  </Link>
                </Typography>
              </Grid>
              <Hidden mdUp>
                <Grid
                  item
                  xs={3}
                  sm={6}
                  md={false}
                  className={classes.menuButtonWrap}
                >
                  <IconButton
                    edge="end"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleToggle}
                  >
                    {isMenuOpened ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                </Grid>
              </Hidden>
              <Grid item xs={12} md={8}>
                <nav className={classes.navigation} ref={anchorRef}>
                  <Searchbar
                    classes={classes}
                    searchQuery={searchQuery}
                    onSearchChange={onSearchChange}
                  />
                  <MenuList className={classes.menu} disablePadding>
                    <MenuItem className={classes.menuItem}>
                      <Link
                        to="/"
                        component={RouterLink}
                        color="inherit"
                        underline="none"
                      >
                        Popular
                      </Link>
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <Link
                        to="/favorites"
                        component={RouterLink}
                        color="inherit"
                        underline="none"
                      >
                        Favorites
                      </Link>
                    </MenuItem>
                  </MenuList>
                </nav>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
