import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom:20
   
  },
  page_buttons_container: {
    width: device.width * 1 - 100,
    flexDirection: "row",
    margin: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  page_icon: {
    flexDirection: "row",
  },
  page_icon: {
    width: 12,
    height: 12,
  },
  page_icon_container: {
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginLeft: 10,
  },
  page_buttons: {
    flexDirection: "row",
  },
});
