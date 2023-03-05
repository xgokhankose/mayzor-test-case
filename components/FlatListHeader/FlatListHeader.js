import { View,Text,Image } from 'react-native'
import styles from "./FlatListHeader.style"

const FlatListHeader = () => {
    return(
        <View style={styles.container} >
            <Image style={styles.icon} source={require("../../assets/flatlistHeader.png")} />
            <View>
                <Text style={{fontWeight:"bold"}} >Bugünün 5 Fırsatı</Text>
                <Text>Fırsat süreleri ve stoklar bitiyor çabuk acele et.</Text>
            </View>
        </View>
    )
}
export default FlatListHeader