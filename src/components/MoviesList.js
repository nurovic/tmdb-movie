import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";
const img = "https://image.tmdb.org/t/p/w500";

export default function TitlebarBelowImageList({ movies }) {
  return (
    <ImageList sx={{ width: "100%", height: "100%" }}>
      <ImageListItem cols={4} sx={{ width: "100%", height: "100%" }}>
        <div component="div"></div>
      </ImageListItem>
      {movies.map((item) => (
        <ImageListItem key={item}>
          <img src={img + item.poster_path} alt={item.title} loading="lazy" />
          <ImageListItemBar
            title={<Link to={`/${item.id}`}> {item.original_title} </Link>}
            subtitle={<span>Vote: {item.vote_average}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
