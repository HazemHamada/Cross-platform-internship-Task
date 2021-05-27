import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderRadius: 10,
    alignSelf: "auto",
  },
  image: {
    resizeMode: "contain",
  },
  date: {
    color: "#a3a3a3",
  },
  overView: {
    flex: 1,
    fontWeight: "bold",
    marginBottom: "3%",
  },
});

export default styles;
