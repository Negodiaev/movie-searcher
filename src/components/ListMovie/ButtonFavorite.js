import React from "react";
import { Button } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
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
            color: theme.palette.secondary.light
        }
    }
};

function checkFavorites(id) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || {};

    return favorites.hasOwnProperty(id);
}

export default class ButtonFavorite extends React.Component {
    state = {
        isChosen: checkFavorites(this.props.movie.id)
    };

    handleFavoritesClick = () => {
        this.props.toggleFavorites(this.props.movie);

        this.setState({ isChosen: !this.state.isChosen });
    };

    render() {
        const { isChosen } = this.state;
        const icon = isChosen ? <Favorite /> : <FavoriteBorder />;
        const title = isChosen ? "Remove from Favorites" : "Add to Favorites";

        return (
            <Button style={styles.root} title={title} onClick={this.handleFavoritesClick}>
                {icon}
            </Button>
        );
    }
}
