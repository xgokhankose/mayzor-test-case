import { TouchableOpacity, Text, View, Image } from "react-native";
import styles from "./HomeBottomButton.style";

const HomeBottomButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.icon} source={require("../../assets/plus.png")} />
      <Text style={styles.text}> Tümünü Göster</Text>
    </TouchableOpacity>
  );
};
export default HomeBottomButton;
