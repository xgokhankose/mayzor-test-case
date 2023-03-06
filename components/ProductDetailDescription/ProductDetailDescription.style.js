import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title_container: {
    padding: 20,
    width: device.width * 1 - 100,
    backgroundColor: "#fff",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: 1,
  },
  time_left_container: {
    padding: 20,
    width: device.width * 1 - 100,
    backgroundColor: "#fff",
    marginBottom: 1,
  },
  clock_icon: {
    width: 25,
    height: 25,
  },
  inner_time_left_container: {
    backgroundColor: "#FF9600",
    height: 60,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    marginBottom: 1,
  },
  time_left_inner: {
    justifyContent: "center",
    alignItems: "center",
    height: 28,
    borderRadius: 3,
  },
  time_left_light_inner: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 28,
    backgroundColor: "#EF8D00",
    borderRadius: 3,
  },
  time_left_text: {
    color: "#fff",
  },
  price_container: {
    backgroundColor: "#fff",
    width: device.width * 1 - 100,
    padding: 15,
    flexDirection: "row",
    marginBottom: 1,
  },
  old_price: {
    width: (device.width * 1 - 150) / 2,
    height: 60,
    backgroundColor: "#F4F6FB",
    margin: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  old_price_title: {
    color: "#B0B0B0",
    fontSize: 13,
  },
  old_price_with_line: {
    fontSize: 22,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#b0b0b0",
  },
  new_price: {
    width: (device.width * 1 - 150) / 2,
    height: 60,
    backgroundColor: "#660099",
    margin: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  new_price_title: {
    color: "#fff",
    fontSize: 13,
  },
  new_price_with_line: {
    fontSize: 22,
    textDecorationStyle: "solid",
    color: "#fff",
  },
  vote_container: {
    backgroundColor: "#fff",
    width: device.width * 1 - 100,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  star_icon: {
    width: 16,
    height: 16,
    marginRight: 2,
  },
  vote_inner_left_container: {
    flexDirection: "row",
  },
  vote_container_text: {
    color: "#B0B0B0",
  },
  color: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "red",
    margin:1,
    padding:3
  },
  color_text_container: {
    flexDirection: "row",
    marginBottom:10
  },
  color_container: {
    backgroundColor: "#fff",
    width: device.width * 1 - 100,
    padding: 20,
    justifyContent: "space-between",
    marginBottom: 1,
  },
  color_outer_container:{
    borderRadius:16,
    borderWidth:2,
  },
  size_button:{
    borderWidth:1,
    borderColor:"#B0B0B0",
    width:28,
    height:28,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    marginRight:10
  },
  size_button_focus:{
   
    width:28,
    height:28,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    marginRight:10,
    backgroundColor:"#FF9600"
  },
  size_container: {
    backgroundColor: "#fff",
    width: device.width * 1 - 100,
    padding: 20,
    justifyContent: "space-between",
    marginBottom: 1,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5
  },
  
});
