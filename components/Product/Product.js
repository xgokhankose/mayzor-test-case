import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Product.style";

const Product = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={require("../../assets/shoe.png")} />
        <View style={styles.image_text_container}>
          <Text style={styles.image_text}>%50</Text>
        </View>
      </View>

      <View style={styles.inner_container}>
        <View style={styles.title}>
          <Image
            style={styles.title_icon}
            source={require("../../assets/price.png")}
          />
          <Text style={styles.title_text}>Süper Fiyat</Text>
        </View>
        <Text style={styles.description}>
          Slazenger Hydron Outdoor Ayakkabı Kadın Su Itici
        </Text>
        <View style={styles.time_left}>
          <View style={styles.time_left_inner}>
            <Text style={styles.time_left_text}>Kalan</Text>
            <Text style={styles.time_left_text}>Süre:</Text>
          </View>
          <View style={styles.time_left_light_inner}>
            <Text style={styles.time_left_text}>9</Text>
            <Text style={styles.time_left_text}>Saat</Text>
          </View>
          <View style={styles.time_left_light_inner}>
            <Text style={styles.time_left_text}>23</Text>
            <Text style={styles.time_left_text}>Dakika</Text>
          </View>
          <View style={styles.time_left_light_inner}>
            <Text style={styles.time_left_text}>42 </Text>
            <Text style={styles.time_left_text}>Saniye</Text>
          </View>
        </View>

        <View style={styles.price_container}>
          <Text style={styles.price_with_line}>4.499.99 TL</Text>
          <Text style={styles.price}>2.277,77 TL</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Product;
