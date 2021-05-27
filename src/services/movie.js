import axios from "axios";
import { Alert } from "react-native";

const baseUrl = "http://api.themoviedb.org/3/discover/movie";
const api_key = "acea91d2bff1c53e6604e4985b6989e2";

const getMovies = async (page) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        api_key: api_key,
        page: page,
      },
    });
    if (response.status == 200) {
      return response.data.results;
    } else {
      Alert.alert(
        "can't load the movies",
        "An error occured while getting the movies"
      );
      return [];
    }
  } catch {
    Alert.alert("can't load the movies", "Check your internet connection");
    return [];
  }
};

const movieService = {
  getMovies,
};

export default movieService;
