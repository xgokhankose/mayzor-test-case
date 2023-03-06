import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./ProductDetailBottomButtons.style";

const ProductDetailBottomButtons = () => {
  return (
    <>
        <View style={styles.container}>
      <TouchableOpacity style={styles.inner_container}>
        <View style={styles.inner_left_container}>
          <View style={styles.icon_container}>
            <Image
              style={styles.icon}
              source={require("../../assets/comment.png")}
            />
          </View>
          <Text>Şimdi Yorum Yap</Text>
        </View>

        <Image style={styles.icon} source={require("../../assets/arrow.png")} />
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
      <TouchableOpacity style={styles.inner_container}>
        <View style={styles.inner_left_container}>
          <View style={styles.icon_container}>
            <Image
              style={styles.icon}
              source={require("../../assets/return.png")}
            />
          </View>
          <Text>İade Koşullarını İnceleyiniz</Text>
        </View>

        <Image style={styles.icon} source={require("../../assets/arrow.png")} />
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
      <TouchableOpacity style={styles.inner_container}>
        <View style={styles.inner_left_container}>
          <View style={styles.icon_container}>
            <Image
              style={styles.icon}
              source={require("../../assets/card.png")}
            />
          </View>
          <Text>Mayzor Taksit Seçenekleri</Text>
        </View>

        <Image style={styles.icon} source={require("../../assets/arrow.png")} />
      </TouchableOpacity>
    </View>
    </>
    
  );
};
export default ProductDetailBottomButtons;
