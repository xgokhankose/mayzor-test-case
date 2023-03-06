import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./DetailBottomProduct.style";

const DetailBottomProduct = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.inner_top_container}>
        <Text style={styles.inner_top_container_title}>15:08:21</Text>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/bottom-product.png")}
      />
      <Text style={styles.product_title}>
        DeFacto Slim Fit Kapüşonlu Fermuarlı Uzun Kollu Hırka
      </Text>
      <View style={styles.dicount_container}>
        <Text style={styles.dicount_container_text} >%60 İNDİRİM</Text>
      </View>
      <View style={styles.seperator}></View>
      <Text style={styles.price_with_line}>99.99</Text>
      <Text style={styles.price}>77.77 TL</Text>
    </TouchableOpacity>
  );
};
export default DetailBottomProduct;
