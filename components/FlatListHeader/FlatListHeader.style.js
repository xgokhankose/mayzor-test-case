import { StyleSheet,Dimensions } from 'react-native'
const device = Dimensions.get("window")
export default StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        paddingHorizontal:10,
        width:device.width*0.84,
        height:70,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        margin:10

    },
    icon:{
        marginRight:12
    }
})