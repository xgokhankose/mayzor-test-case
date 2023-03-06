import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  title_container: {
    backgroundColor: "#fff",
    width: device.width * 1 - 100,
    marginBottom:1,
    height:60,
    justifyContent:"center",
    padding:20,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  description_container: {
    backgroundColor: "#fff",
    width: device.width * 1 - 100,
    justifyContent: "center",
    padding: 20,
    borderBottomLeftRadius: 5,
    borderBottomsRightRadius: 5,
  },
});
