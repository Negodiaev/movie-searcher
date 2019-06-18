import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    },
    titleLink: {
        color: "#fff",
        "&:hover": {
            textDecoration: "none"
        }
    },
    search: {
        position: "relative",
        marginLeft: 0,
        width: "100%",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
        }
    },
    searchIcon: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: theme.spacing(7),
        height: "100%",
        pointerEvents: "none"
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        width: "100%",
        transition: theme.transitions.create("width"),
        [theme.breakpoints.up("sm")]: {
            width: 150,
            "&:focus": {
                width: 200
            }
        }
    }
}));

export default useStyles;
