import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title_container: {
    backgroundColor: "#660099",
    width: device.width,
    height: 260,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  auth_buttons_container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 326,
    height: 68,
    borderWidth:1,
    borderColor:"#F4F6FB",
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  button_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button_side_color: {
    backgroundColor: "#660099",
    flex: 1,
    height: 34,
  },
  inner_container: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 270,
  },
  button: {
    width: 91,
    height: 68,
    justifyContent: "center",
    alignItems: "center",
  },
  button_side_color_second: {
    backgroundColor: "white",
    flex: 1,
    height: 34,
  },
  color_container: {
    flex: 1,
  },
  icon: {
    backgroundColor: "white",
  },
  icon_container: {
    height: 68,
    backgroundColor: "white",
    justifyContent: "center",
  },
  button_focus: {
    width: 91,
    height: 69,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#FF9600",
  },
  button_text_focus: {
    color: "#660099",
    fontSize: 15,
    fontWeight: "bold",
  },
  button_text: {
    fontWeight: "bold",
  },
  auth_container: {
    backgroundColor: "#F4F6FB",
    borderTopLeftRadius:5,
    borderTopRightRadius:5
    
  },
});
