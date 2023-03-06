import { useState } from "react";

import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./ProductDetailDescription.style";
import colorData from "../../color.json";
import bodySize from "../../bodySize.json";

const ProductDetailDescription = () => {
  const [colorName, setColorName] = useState("");
  const [colorHex, setColorHex] = useState("");
  const [sizeName, setSizeName] = useState("");
  const [sizeNumber, setSizeNumber] = useState("");

  const flatListSizeRender = ({ item }) => {
    const handlePress = () => {
      setSizeName(item.name);
      setSizeNumber(item.size);
    };
    return (
      <TouchableOpacity
        onPress={handlePress}
        style={
          sizeNumber == item.size
            ? styles.size_button_focus
            : styles.size_button
        }
      >
        <Text
          style={[
            { textAlign: "center" },
            sizeNumber == item.size ? { color: "#fff" } : { color: "#B0B0B0" },
          ]}
        >
          {item.size}{" "}
        </Text>
      </TouchableOpacity>
    );
  };

  const flatListColorRender = ({ item }) => {
    const handlePress = () => {
      setColorHex(item.color);
      setColorName(item.name);
    };
    return (
      <View
        style={[
          colorHex == item.color
            ? styles.color_outer_container
            : { borderWidth: 0 },
          colorHex == item.color ? { borderColor: colorHex } : {},
        ]}
      >
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.color, { backgroundColor: item.color }]}
        ></TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text>Slazenger Hydron Outdoor Ayakkabı Kadın Su İtici</Text>
      </View>
      <View style={styles.time_left_container}>
        <View style={styles.inner_time_left_container}>
          <Image
            style={styles.clock_icon}
            source={require("../../assets/clock-history.png")}
          />
          <View style={styles.time_left_inner}>
            <Text style={styles.time_left_text}>Fırsat Süresi</Text>
          </View>
          <View style={styles.time_left_light_inner}>
            <Text style={styles.time_left_text}>9</Text>
            <Text style={styles.time_left_text}>Saat</Text>
          </View>
          <View style={styles.time_left_light_inner}>
            <Text style={styles.time_left_text}>29</Text>
            <Text style={styles.time_left_text}>Dakika</Text>
          </View>
          <View style={styles.time_left_light_inner}>
            <Text style={styles.time_left_text}>39</Text>
            <Text style={styles.time_left_text}>Saniye</Text>
          </View>
        </View>
      </View>
      <View style={styles.price_container}>
        <View style={styles.old_price}>
          <Text style={styles.old_price_title}>Piyasa Fiyatı</Text>
          <Text style={styles.old_price_with_line}>6.545,54</Text>
        </View>
        <View style={styles.new_price}>
          <Text style={styles.new_price_title}>Mayzor Fiyatı</Text>
          <Text style={styles.new_price_with_line}>4.545,54 TL</Text>
        </View>
      </View>
      <View style={styles.vote_container}>
        <View style={styles.vote_inner_left_container}>
          <Image
            style={styles.star_icon}
            source={require("../../assets/orangeStar.png")}
          />
          <Image
            style={styles.star_icon}
            source={require("../../assets/orangeStar.png")}
          />
          <Image
            style={styles.star_icon}
            source={require("../../assets/orangeStar.png")}
          />
          <Image
            style={styles.star_icon}
            source={require("../../assets/orangeStar.png")}
          />
          <Image
            style={styles.star_icon}
            source={require("../../assets/blackStar.png")}
          />
          <Text>(4/5)</Text>
        </View>
        <Text style={styles.vote_container_text}>13 Değerlendirme</Text>
      </View>
      <View style={styles.color_container}>
        <View style={styles.color_text_container}>
          <Text style={{ fontWeight: "bold" }}>Renk: </Text>
          <Text> {colorName} </Text>
        </View>

        <FlatList
          horizontal={true}
          data={colorData}
          renderItem={flatListColorRender}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.size_container}>
        <View style={styles.color_text_container}>
          <Text style={{ fontWeight: "bold" }}>Beden: </Text>
          <Text> {sizeName} </Text>
        </View>

        <FlatList
          horizontal={true}
          data={bodySize}
          renderItem={flatListSizeRender}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default ProductDetailDescription;
