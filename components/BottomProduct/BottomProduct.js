import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./BottomProduct.style";

const BottomProduct = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.inner_top_container}>
        <Text style={styles.inner_top_container_title}>1.600 TL İndirim</Text>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/bottom-product.png")}
      />
      <Text style={styles.product_title} >Bioblas Saç Kremi</Text>

      <View style={styles.seperator}></View>
      <Text style={styles.price_with_line}>99.99</Text>
      <Text style={styles.price} >77.77 TL</Text>
    </TouchableOpacity>
  );
};
export default BottomProduct;
