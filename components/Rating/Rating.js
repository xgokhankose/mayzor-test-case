import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Rating.style";

const Rating = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text>Ürün Değerlendirmeleri</Text>
      </View>
      <View style={styles.product_container}>
        <Image
          style={styles.image}
          source={require("../../assets/productDetailShoe.png")}
        />
        <View style={styles.product_name_container}>
          <Text>Slazenger Hydron Outdoor Ayakkabı Kadın Su Itici</Text>
          <View style={styles.product_name_inner_container}>
            <Image
              style={styles.star_icon}
              source={require("../../assets/orangeStar.png")}
            />
            <Text style={{ color: "#B0B0B0" }}>(4/5) - 13 Değerlendirme</Text>
          </View>
        </View>
      </View>
      <View style={styles.comment_container}>
        <Text>İsim Soyisim</Text>
        <View style={styles.comment_star_container}>
          <Image
            style={styles.comment_star_icon}
            source={require("../../assets/orangeStar.png")}
          />
          <Image
            style={styles.comment_star_icon}
            source={require("../../assets/orangeStar.png")}
          />
          <Image
            style={styles.comment_star_icon}
            source={require("../../assets/orangeStar.png")}
          />
          <Image
            style={styles.comment_star_icon}
            source={require("../../assets/orangeStar.png")}
          />
          <Image
            style={styles.comment_star_icon}
            source={require("../../assets/orangeStar.png")}
          />
          <Text style={{ color: "#B0B0B0" }}>(5)</Text>
        </View>
        <Text style={styles.comment}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words.
        </Text>
      </View>
      <View style={styles.comment_container}>
        <Text>M*** A***</Text>
        <View style={styles.comment_star_container}>
          <Image
            style={styles.comment_star_icon}
            source={require("../../assets/orangeStar.png")}
          />
          <Image
            style={styles.comment_star_icon}
            source={require("../../assets/orangeStar.png")}
          />
          <Image
            style={styles.comment_star_icon}
            source={require("../../assets/orangeStar.png")}
          />
          <Image
            style={styles.comment_star_icon}
            source={require("../../assets/orangeStar.png")}
          />
          <Image
            style={styles.comment_star_icon}
            source={require("../../assets/blackStar.png")}
          />
          <Text style={{ color: "#B0B0B0" }}>(4)</Text>
        </View>
        <Text style={styles.comment}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words.
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Tümünü Gör (1555)</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Rating;
