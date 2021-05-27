import React, { useState, useEffect, useMemo, useRef } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";
import Movie from "../../components/movie";
import movieService from "../../services/movie";

const renderItem = ({ item }) => {
  return <Movie movie={item} />;
};

const Feed = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const memoizedValue = useMemo(() => renderItem, [data]);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = async () => {
    setloading(true);
    if (page == 1) {
      setData(await movieService.getMovies(page));
    } else {
      setData(data.concat(await movieService.getMovies(page)));
    }
    setloading(false);
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={memoizedValue}
        data={data}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          if (page === 1) {
            setRefreshing(false);
          } else {
            setPage(1);
          }
        }}
        onEndReached={() => setPage(page + 1)}
        onEndThreshold={0}
        keyExtractor={(item) => item.id.toString()}
        removeClippedSubviews={true}
        ListEmptyComponent={<Text>No Movies Available</Text>}
      />
      {loading ? <ActivityIndicator size="large" color="lightgray" /> : null}
    </View>
  );
};

export default Feed;
