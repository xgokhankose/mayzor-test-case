import { SafeAreaView, Text, TouchableOpacity,Image } from "react-native";
import styles from "./HomeHeader.style"

const HomeHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.profile_button}>
        <Image style={styles.profile_icon} source={require("../../assets/profile.png")} />
      </TouchableOpacity>
      
      <Text style={{color:"#fff"}}>MAYZOR TEST CASE</Text>

      <TouchableOpacity style={styles.basket_button}>
        <Image style={styles.basket_icon} source={require("../../assets/basket.png")} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default HomeHeader;
