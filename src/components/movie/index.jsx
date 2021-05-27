import React from "react";
import { Text } from "react-native";
import styles from "./styles";
import { Card } from "react-native-elements";

const imageBaseUrl = "https://image.tmdb.org/t/p/w200";

const Movie = ({ movie }) => {
  return (
    <Card containerStyle={styles.card}>
      <Card.Image
        style={styles.image}
        source={{ uri: imageBaseUrl + movie.poster_path }}
      ></Card.Image>
      <Card.Title>{movie.title}</Card.Title>
      <Text style={styles.overView}>{"Overview: " + movie.overview}</Text>
      <Text style={styles.date}>{"Release date: " + movie.release_date}</Text>
    </Card>
  );
};

export default Movie;
