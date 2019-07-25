import React from "react";
import { Typography, Divider } from "@material-ui/core";
import useStyles from "./styles";

export default function Rating(props) {
    const { average, count, popularity } = props;
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Typography component="p" className={classes.info}>
                    <Typography component="span">
                        <strong className={classes.average}>{average}</strong>
                    </Typography>
                    <br />
                    <Typography component="span">
                        <small className={classes.count}>{count}</small>
                    </Typography>
                </Typography>
            </div>
            <Divider className={classes.divider} />
            <Typography component="p" className={classes.popularity}>
                <small>
                    <strong>Popularity:</strong> {popularity.toFixed(2)}
                </small>
            </Typography>
        </>
    );
}
