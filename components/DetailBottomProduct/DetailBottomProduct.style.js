import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: (device.width * 1 - 100) / 2,
    alignItems: "center",
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  inner_top_container_title: {
    fontWeight: "bold",
  },
  inner_top_container: {
    backgroundColor: "#F4F6FB",
    width: 110,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    margin: 13,
  },
  product_title: {
    maxWidth: (device.width * 1 - 120) / 2,
    textAlign: "center",
  },
  seperator: {
    borderWidth: 1,
    width: "100%",
    borderColor: "#F4F6FB",
    marginVertical: 13,
  },
  price_with_line: {
    fontSize: 13,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#b0b0b0",
  },
  price: {
    fontWeight: "bold",
    color: "#660099",
    fontSize: 17,
    margin: 13,
  },
  dicount_container: {
    width: 80,
    height: 25,
    backgroundColor: "#FF9600",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:13
  },
  dicount_container_text: {
    color: "#fff",
    fontWeight:"bold",
    fontSize:13
  },
});
