import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F4F6FB",
    width: 326,
    paddingTop:20,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5
  },
  icon: {
    width: 20,
    height: 15,
    marginHorizontal: 15,
    marginVertical: 22.5,
  },
  input_container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#F4F6FB",
    width:286,
    height:60,
    margin:10,
    borderRadius:5
  },
  button:{
    width:286,
    height:60,
    margin:10,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#FF9600",
  },
  button_text:{
    color:"#fff",
    fontWeight:"bold"
  },
  forgot:{
    margin:20
  },
  input:{
    flex:1
  }
});
