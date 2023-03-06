import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom:20
  },
  inner_container: {
    backgroundColor: "#fff",
    width: device.width * 1 - 100,
    padding: 20,
    borderRadius: 5,
    marginBottom: 1,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  icon_container: {
    width: 35,
    height: 35,
    backgroundColor: "#F4F6FB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:5,
    marginRight:10
  },
  inner_left_container:{
    flexDirection:"row",
    alignItems:"center"
  }
});
