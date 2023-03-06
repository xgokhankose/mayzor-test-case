import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: (device.width * 1 - 84) / 2,
    height: 45,
    alignItems: "center",
    margin: 10,
    borderRadius: 5,
    flexDirection: "row",
    paddingLeft: 13,
  },
  text: {
    marginLeft: 12,
  },
});
