import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: (device.width * 1 - 84) / 2,
    alignItems: "center",
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  inner_top_container_title: {
    color: "#fff",
  },
  inner_top_container: {
    backgroundColor: "#660099",
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
  product_title: {},
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
  price:{
    fontWeight:"bold",
    color:"#660099",
    fontSize:17,
    margin:13
  }
});
