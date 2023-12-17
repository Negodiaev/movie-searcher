import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Favorite, FavoriteBorder, Close } from "@material-ui/icons";
import theme from "../../theme";

const styles = {
  root: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: "12px 10px",
    minWidth: "auto",
    transitionProperty: "background-color, color, box-shadow, border",
    color: "inherit",

    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
};

function checkFavorites(id) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || {};

  return favorites.hasOwnProperty(id);
}

export default function ButtonFavorite(props) {
  const {
    movie,
    buttonCloser,
    isVariantText = false,
    toggleFavorites,
    updateFavorites,
  } = props;
  const [isFavourite, setFavourite] = useState(checkFavorites(movie.id));

  function handleFavoritesClick() {
    toggleFavorites(movie);

    typeof updateFavorites === "function"
      ? updateFavorites()
      : setFavourite((prevState) => !prevState);
  }

  /*  componentWillUpdate(nextProps, nextState) {
    const isFavorite = checkFavorites(nextProps.movie.id);

    isFavorite !== this.state.isFavorite &&
      this.setState({ isFavorite: isFavorite });
  }*/

  const icon = buttonCloser ? (
    <Close />
  ) : isFavourite ? (
    <Favorite />
  ) : (
    <FavoriteBorder />
  );
  const title = isFavourite ? "Remove from Favorites" : "Add to Favorites";

  return isVariantText ? (
    <Button
      size="small"
      color={isFavourite ? "primary" : "secondary"}
      style={styles}
      title={title}
      onClick={handleFavoritesClick}
    >
      {title}
    </Button>
  ) : (
    <Button style={styles.root} title={title} onClick={handleFavoritesClick}>
      {icon}
    </Button>
  );
}
