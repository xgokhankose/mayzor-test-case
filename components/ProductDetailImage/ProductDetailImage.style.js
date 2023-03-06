import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  image_inner: {
    width: "100%",
    height: 370,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image_go_back: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 25,
  },
  icon: {
    width: 14,
    height: 14,
  },
  image_right_icon: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  image_right_icon_container: {
    margin: 20,
  },
  slider: {
    backgroundColor: "#191D25D9",
    width: 92,
    height: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 10,
  },
  image: {
    alignItems: "center",
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#191D25D9",
    borderWidth: 1,
    borderColor: "#fff",
  },
  circle_focus: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
  },
});
