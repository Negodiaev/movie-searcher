import React from "react";
import { Typography } from "@material-ui/core";
import RecommendedMovie from "./RecommendedMovie";
import Slider from "react-slick";

const sliderSettings = {
  slidesToShow: 6,
  lazyLoad: true,
  draggable: false,
  responsive: [
    {
      breakpoint: 479,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 5,
      },
    },
  ],
};

export default function Recommendations(props) {
  const { movies, genres } = props;

  return (
    <React.Fragment>
      <Typography variant="h4" component="h3" gutterBottom>
        Recommendations:
      </Typography>
      <Slider {...sliderSettings}>
        {movies.map((item, idx) => (
          <div key={`movie-recommendation-${idx + 1}`}>
            <RecommendedMovie
              movie={item}
              genres={genres}
              changeMovie={props.changeMovie}
            />
          </div>
        ))}
      </Slider>
    </React.Fragment>
  );
}
