import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    link: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "17.5rem"
        }
    },
    card: {
        position: "relative"
    },
    details: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        width: "100%",
        height: "100%",
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundImage: "linear-gradient(#111, transparent 40%, transparent 60%, #111)",
        transition: "opacity .2s",
        [theme.breakpoints.up("md")]: {
            paddingTop: 20
        },
        [theme.breakpoints.up("lg")]: {
            opacity: 0,
            "&:hover": {
                opacity: 1
            }
        }
    },
    genres: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        opacity: 0.75
    },
    genresList: {
        margin: 0,
        fontSize: ".875em"
    }
}));

export default useStyles;
