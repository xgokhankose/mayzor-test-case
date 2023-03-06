import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  inner_container: {
    width: (device.width * 1 - 84) / 2,
    alignItems: "center",
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    position: "relative",
  },
  inner_top_container_title: {
    color: "#fff",
  },
  inner_top_container: {
    backgroundColor: "#FF9600",
    width: 110,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
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
    textDecorationStyle: "solid",
    color: "#b0b0b0",
    margin: 13,
  },
  percent: {
    position: "absolute",
    backgroundColor: "#FF9600",
    height: device.height * 0.23,
    width: (device.width * 1 - 10) / 4,
    marginLeft: 8,
    borderRadius: 5,
    paddingVertical: 104,
  },
  voted_container: {
    position: "absolute",
    backgroundColor: "#191D25CC",
    height: device.height * 0.23,
    width: (device.width * 1 - 78) / 2,
    borderRadius: 5,
    paddingVertical: 104,
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  voted_text: {
    color: "#fff",
    fontWeight: "500",
    position: "absolute",
    zIndex: 101,
  },
});
