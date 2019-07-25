import React from "react";
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
        isFavorite: checkFavorites(this.props.movie.id)
    };

    handleFavoritesClick = () => {
        const { updateFavorites } = this.props;

        this.props.toggleFavorites(this.props.movie);

        typeof updateFavorites === "function"
            ? updateFavorites()
            : this.setState({ isFavorite: !this.state.isFavorite });
    };

    componentWillUpdate(nextProps, nextState) {
        const isFavorite = checkFavorites(nextProps.movie.id);

        isFavorite !== this.state.isFavorite && this.setState({ isFavorite: isFavorite });
    }

    render() {
        const { isFavorite } = this.state;
        const icon = this.props.buttonCloser ? <Close /> : isFavorite ? <Favorite /> : <FavoriteBorder />;
        const title = isFavorite ? "Remove from Favorites" : "Add to Favorites";
        const textButtonStyles = this.props.styles;

        return typeof textButtonStyles === "object" ? (
            <Button
                size="small"
                color={isFavorite ? "primary" : "secondary"}
                style={textButtonStyles}
                title={title}
                onClick={this.handleFavoritesClick}
            >
                {title}
            </Button>
        ) : (
            <Button style={styles.root} title={title} onClick={this.handleFavoritesClick}>
                {icon}
            </Button>
        );
    }
}
