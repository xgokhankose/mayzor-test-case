import { StyleSheet,Dimensions } from 'react-native'
const device = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        flexDirection:"row",
        width: device.width * 0.84,
        height:50,
        backgroundColor:"#FF9600",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        marginVertical:20

    },
    icon:{
        width:16,
        height:16
       
    },
    text:{
        color:"#fff",
        fontWeight:"500"
    }
})