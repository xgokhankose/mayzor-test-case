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
    height: 54,
    justifyContent: "center",
    padding: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: 1,
  },
  product_container: {
    backgroundColor: "#fff",
    width: device.width * 1 - 100,
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    marginBottom:1
  },
  image: {
    width: 54,
    height: 54,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  product_name_container: {
    maxWidth: device.width * 1 - 174,
    marginLeft:5
  },
  star_icon:{
    width:11,
    height:10,
    marginRight:5
  },
  product_name_inner_container:{
    flexDirection:"row",
    marginTop:5,
    alignItems:"center"
  },
  comment_container:{
    backgroundColor: "#fff",
    width: device.width * 1 - 100,
    padding: 20,
    marginBottom:1
  },
  comment_star_icon:{
    width:11,
    height:10,
    marginRight:5
  },
  comment_star_container:{
    flexDirection:"row",
    alignItems:"center",
    marginVertical:5
  },
  comment:{
    marginVertical:20
  },
  button:{
    backgroundColor:"#FF9600",
    width: device.width * 1 - 100,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    marginBottom:20
  },
  button_text:{
    color:"#fff",
    fontWeight:"bold"
  },
  
});
