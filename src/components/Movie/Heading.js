import React from "react";
import { Typography } from "@material-ui/core";

const styles = {
    heading: { marginBottom: "1.5em" },
    title: { marginBottom: ".1875em" }
};

export default function Heading(props) {
    const { title, tagline } = props.details;

    return (
        <section style={styles.heading}>
            <Typography variant="h1" style={styles.title} align="center" gutterBottom>
                {title}
            </Typography>
            {tagline && <Typography variant="h5" align="center" gutterBottom>{`"${tagline}"`}</Typography>}
        </section>
    );
}
