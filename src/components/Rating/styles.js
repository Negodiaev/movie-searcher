import { makeStyles } from "@material-ui/core/styles";

const iconStar =
    "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZDQTI4OyIgZD0iTSAyNCA0LjA1MDc4MSBMIDMwLjQ4ODI4MSAxNy4xODc1IEwgNDUgMTkuMjg5MDYzIEwgMzQuNSAyOS41MTE3MTkgTCAzNi45NzY1NjMgNDMuOTQ5MjE5IEwgMjQgMzcuMTM2NzE5IEwgMTEuMDIzNDM4IDQzLjk0OTIxOSBMIDEzLjUgMjkuNTExNzE5IEwgMyAxOS4yODkwNjMgTCAxNy41MTE3MTkgMTcuMTg3NSBaICI+PC9wYXRoPjwvZz48L3N2Zz4=')";

const useStyles = makeStyles(theme => ({
    wrap: {
        padding: ".625em 5px",
        textAlign: "center"
    },
    root: {
        display: "inline-flex",
        marginBottom: ".875em",
        paddingLeft: "2.75em",
        paddingRight: "2.75em",
        minHeight: "2.5em",
        fontSize: "1rem",
        background: `${iconStar} 0 50% no-repeat, ${iconStar} 100% 50% no-repeat`,
        backgroundSize: "2.5em"
    },
    info: {
        "& p": {
            margin: 0
        }
    },
    average: {
        fontSize: "1.75rem",
        lineHeight: 1,
        fontWeight: 700,
        color: "#3a5"
    },
    count: {
        fontSize: ".75rem",
        lineHeight: 1
    },
    divider: {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "10rem"
    }
}));

export default useStyles;
