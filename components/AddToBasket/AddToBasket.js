import { View, Text, TouchableOpacity } from "react-native";
import styles from "./AddToBasket.style";

const AddToBasket = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left_container}>
        <Text style={{ color: "#fff" }}>-32%</Text>
      </View>
      <View style={styles.mid_container}>
        <Text style={styles.mid_container_text_with_line}>3.999.99</Text>
        <Text style={styles.mid_container_text}>2.777.77</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>
            Sepete Ekle
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default AddToBasket;
