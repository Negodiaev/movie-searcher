import { createTheme } from "@material-ui/core/styles";

// const defaultTheme = createTheme();

const units = createTheme({
  spacing: 10,
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1025,
      xl: 1280,
    },
  },
});

const theme = createTheme({
  spacing: units.spacing,
  breakpoints: {
    values: {
      xs: units.breakpoints.values.xs,
      sm: units.breakpoints.values.sm,
      md: units.breakpoints.values.md,
      lg: units.breakpoints.values.lg,
      xl: units.breakpoints.values.xl,
    },
  },
  overrides: {
    MuiTypography: {
      root: {},
      h1: {
        fontSize: "2rem",
        lineHeight: 1.15,
        fontWeight: 700,
        [units.breakpoints.up("md")]: {
          fontSize: "3rem",
        },
      },
      h2: {
        fontSize: "1.5rem",
        fontWeight: 700,
        [units.breakpoints.up("md")]: {
          fontSize: "2rem",
        },
      },
      h3: {
        fontSize: "1.33rem",
        fontWeight: 700,
        [units.breakpoints.up("md")]: {
          fontSize: "1.5rem",
        },
      },
      h4: {
        fontSize: "1.2rem",
        fontWeight: 700,
        [units.breakpoints.up("md")]: {
          fontSize: "1.33rem",
        },
      },
      h5: {
        fontSize: "1.15rem",
        fontWeight: 700,
        [units.breakpoints.up("md")]: {
          fontSize: "1.25rem",
        },
      },
      gutterBottom: {
        marginBottom: ".5em",
      },
    },
    MuiContainer: {
      root: {},
      maxWidthXl: {
        maxWidth: "1920px",
      },
    },
    MuiGrid: {
      root: {},
      container: {
        marginTop: 0,
        marginBottom: 0,
      },
      item: {},
      "spacing-xs-2": {
        marginTop: 0,
        marginBottom: 0,
        "& > .MuiGrid-item": {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiToolbar: {
      root: {
        // paddingTop: ".7143em",
        // paddingBottom: ".7143em"
      },
      regular: {
        minHeight: "3rem",
        [units.breakpoints.up("xs")]: {
          minHeight: "3rem",
        },
      },
    },
    MuiInputBase: {
      root: {
        fontSize: ".875rem",
      },
    },
    MuiCard: {
      root: {
        marginBottom: units.spacing(2),
      },
    },
    MuiCardMedia: {
      root: {
        paddingTop: "145.4333%",
      },
    },
    MuiListItem: {
      root: {
        // paddingLeft: units.spacing(2)
      },
    },
    MuiButton: {
      root: {
        maxWidth: "100%",
      },
      label: {
        display: "inline-block",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      },
    },
    MuiCircularProgress: {
      root: {
        margin: units.spacing(3),
      },
    },
  },
});

export default theme;
