import { StyleSheet, Dimensions } from "react-native";

const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 80,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginTop:10,
    marginBottom:100
  },
  left_container: {
    backgroundColor: "#FF9600",
    width: 67,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  mid_container_text_with_line: {
    fontSize: 13,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#b0b0b0",
  },
  mid_container_text: {
    color: "#660099",
    fontWeight: "bold",
  },
  button:{
    width:153,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#660099",
    borderRadius:5
  },
  button_text:{
    color:"#fff",
    fontWeight:"bold"
  }
});
