import { createMuiTheme } from "@material-ui/core/styles";

const units = createMuiTheme({
    spacing: 10
});

const theme = createMuiTheme({
    spacing: units.spacing,
    overrides: {
        MuiTypography: {
            h1: { fontSize: "3rem" },
            h2: { fontSize: "2.5rem" },
            h3: { fontSize: "2rem" },
            h4: { fontSize: "1.5rem" },
            h5: { fontSize: "1.25rem" }
        },
        MuiCardMedia: {
            root: {
                paddingTop: "145.4333%"
            }
        },
        MuiCircularProgress: {
            root: {
                margin: units.spacing(3)
            }
        }
    }
});

export default theme;
