import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {},
  titleWrap: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
    fontFamily: `"Viga", sans-serif`,
    fontSize: 24,
    fontWeight: 400,
  },
  titleLink: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  menuButtonWrap: {
    textAlign: "right",
  },
  menuButton: {
    marginRight: "-.625em",
  },
  navigation: {
    [theme.breakpoints.down("sm")]: {
      overflow: "hidden",
      maxHeight: "0",
      // transition: "max-height .5s ease-in",
      "&.active": {
        maxHeight: "100%",
        // transition: "max-height .2s ease-out"
      },
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  search: {
    position: "relative",
    marginLeft: 0,
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: ".5em",
      marginBottom: ".5em",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "1.4286em",
      maxWidth: "28.5714em",
    },
  },
  searchIcon: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: theme.spacing(5),
    height: "100%",
    pointerEvents: "none",
  },
  inputRoot: {
    width: "100%",
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 5),
    height: "1em",
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      // width: 150,
      "&:focus": {
        // width: 200
      },
    },
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      marginRight: "-1rem",
    },
  },
  menuItem: {
    [theme.breakpoints.down("sm")]: {
      minHeight: 48,
    },
  },
}));

export default useStyles;
