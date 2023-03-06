import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "./ProductDetailImage.style";

const ProductDetailImage = ({onPress}) => {
  return (
    <View>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/productDetailShoe.png")}
      >
        <View style={styles.image_inner}>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.image_go_back}>
              <Image
                style={styles.icon}
                source={require("../../assets/back.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.image_right_icon_container}>
            <TouchableOpacity>
              <View style={styles.image_right_icon}>
                <Image
                  style={styles.icon}
                  source={require("../../assets/heart.png")}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.image_right_icon}>
                <Image
                  style={styles.icon}
                  source={require("../../assets/connection.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.slider}>
          <View style={styles.circle_focus}></View>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default ProductDetailImage;
