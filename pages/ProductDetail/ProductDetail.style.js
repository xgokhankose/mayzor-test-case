import { StyleSheet, Dimensions } from "react-native";
const device= Dimensions.get("window")
export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent:"center"
  },
  inner_container: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    width:device.width*1,

  },
});
