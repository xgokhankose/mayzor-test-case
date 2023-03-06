import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./DetailNextPreviousButtons.style.";

const DetailNextPreviousButtons = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.page_buttons_container}>
        <Text>{title}</Text>
        <View style={styles.page_buttons}>
          <TouchableOpacity style={styles.page_icon_container}>
            <Image
              style={styles.page_icon}
              source={require("../../assets/pageLeft.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.page_icon_container}>
            <Image
              style={styles.page_icon}
              source={require("../../assets/pageRight.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default DetailNextPreviousButtons;
