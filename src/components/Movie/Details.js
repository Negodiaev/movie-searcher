import React from "react";
import {
  Typography,
  Grid,
  Card,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Link,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import Rating from "../Rating";
import ButtonFavorite from "../ButtonFavorite";

const styles = {
  info: {
    paddingTop: ".7143em",
  },
  sidebar: {
    content: {
      padding: ".625em 5px",
      textAlign: "center",
    },
  },
  tableWrap: {
    overflow: "auto",
    width: "100%",
  },
  table: {
    minWidth: "32em",
    "& td": {
      color: "#f28",
      "&:first-child": {
        fontWeight: 700,
        // whiteSpace: "nowrap"
      },
    },
  },
  buttons: {
    favorite: {
      fontSize: ".625rem",
    },
  },
};

const fillCompaniesList = (companies) =>
  companies &&
  companies.map((item, idx) => (
    <ListItem key={`production-company-${idx + 1}`}>
      <ListItemText>
        {item.origin_country
          ? `${item.name} (${item.origin_country})`
          : item.name}
      </ListItemText>
    </ListItem>
  ));

const fillMoneyValue = (value) =>
  value ? `$${value.toLocaleString("en-US").replace(/,/g, ".")}` : "–";

export default function Details(props) {
  const { details, collection, toggleFavorites } = props;
  const { genres, runtime, homepage } = details;
  const originalLanguage = details.original_language;
  const productionCountries = details.production_countries;
  const spokenLanguages = details.spoken_languages;

  return (
    <section style={styles.info}>
      <Card>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardMedia
              image={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
              title={details.title}
              alt={`${details.title} poster`}
            />
            <div style={styles.sidebar.content}>
              <Rating
                average={details.vote_average}
                count={details.vote_count}
                popularity={details.popularity}
              />
              <ButtonFavorite
                movie={details}
                isVariantText
                toggleFavorites={toggleFavorites}
                styles={styles.buttons.favorite}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9}>
            <CardContent>
              <Typography variant="h3" component="h2" gutterBottom>
                About:
              </Typography>
              <Typography variant="body2" component="p" gutterBottom>
                {details.overview}
              </Typography>
              <br />
              <Divider />
              <br />
              <Typography variant="h4" component="h3" gutterBottom>
                Movie details:
              </Typography>
              <Paper style={styles.tableWrap}>
                <Table size="small" style={styles.table}>
                  <TableBody>
                    <TableRow>
                      <TableCell>Original title:</TableCell>
                      <TableCell>{details.original_title}</TableCell>
                    </TableRow>
                    {genres && (
                      <TableRow>
                        <TableCell>Genres:</TableCell>
                        <TableCell>
                          {genres.map((genre) => genre.name).join(", ")}
                        </TableCell>
                      </TableRow>
                    )}
                    {originalLanguage && (
                      <TableRow>
                        <TableCell>Original language</TableCell>
                        <TableCell>{originalLanguage.toUpperCase()}</TableCell>
                      </TableRow>
                    )}
                    {spokenLanguages && (
                      <TableRow>
                        <TableCell>Spoken languages:</TableCell>
                        <TableCell>
                          {spokenLanguages.map((item) => item.name).join(", ")}
                        </TableCell>
                      </TableRow>
                    )}
                    {runtime && (
                      <TableRow>
                        <TableCell>Runtime:</TableCell>
                        <TableCell>{`${details.runtime} min`}</TableCell>
                      </TableRow>
                    )}
                    <TableRow>
                      <TableCell>Budget:</TableCell>
                      <TableCell>{fillMoneyValue(details.budget)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Revenue:</TableCell>
                      <TableCell>{fillMoneyValue(details.revenue)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Release date:</TableCell>
                      <TableCell>
                        {details.release_date.split("-").reverse().join(".")}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Status:</TableCell>
                      <TableCell>{details.status}</TableCell>
                    </TableRow>
                    {productionCountries && (
                      <TableRow>
                        <TableCell>Production countries:</TableCell>
                        <TableCell>
                          {productionCountries
                            .map((item) => item.name)
                            .join(", ")}
                        </TableCell>
                      </TableRow>
                    )}
                    <TableRow>
                      <TableCell>Production companies:</TableCell>
                      <TableCell>
                        <List dense>
                          {fillCompaniesList(details.production_companies)}
                        </List>
                      </TableCell>
                    </TableRow>
                    {collection?.name && (
                      <TableRow>
                        <TableCell>Belongs to:</TableCell>
                        <TableCell>{collection.name}</TableCell>
                      </TableRow>
                    )}
                    {homepage && (
                      <TableRow>
                        <TableCell>Movie homepage:</TableCell>
                        <TableCell>
                          <Link href={details.homepage} target="_blank">
                            Link
                          </Link>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </Paper>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </section>
  );
}
