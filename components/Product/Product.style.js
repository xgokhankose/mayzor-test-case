import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    width: device.width * 0.84,
    borderRadius: 5,
    margin: 10,
  },
  description: {
    marginLeft: 20,
  },
  inner_container: {
    justifyContent: "space-evenly",
    width: device.width * 0.84 - 153,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  title_icon: {
    marginRight: 5,
  },
  title_text: {
    color: "#660099",
    fontWeight: "bold",
  },
  time_left: {
    flexDirection: "row",
    backgroundColor: "#FF9600",
    justifyContent: "center",
    height: 40,
    alignItems: "center",
  },
  time_left_light_inner: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 28,
    backgroundColor: "#EF8D00",
    marginRight: 4,
    borderRadius: 3,
  },
  time_left_text: {
    color: "#fff",
  },
  time_left_inner: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 28,
    backgroundColor: "#EF8D00",
    marginRight: 4,
    marginLeft: 16,
    borderRadius: 3,
  },
  price_container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  price_with_line: {
    fontSize: 13,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#b0b0b0",
  },
  price: {
    fontWeight: "bold",
    fontSize: 14,
  },
  image_container: {},
  image: {
    position: "relative",
  },
  image_text: {
    color: "#fff",
    fontSize: 13,
  },
  image_text_container: {
    position: "absolute",
    backgroundColor: "#660099",
    width: 40,
    height: 25,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
