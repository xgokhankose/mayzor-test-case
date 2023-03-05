import {
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import FlatListHeader from "../../components/FlatListHeader";
import HomeBottom from "../../components/HomeBottom";
import HomeHeader from "../../components/HomeHeader";
import Product from "../../components/Product";
import styles from "./Home.style";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <HomeHeader />
        <FlatListHeader />
        <Product />
        <Product />
        <View style={styles.page_buttons_container}>
          <Text>Yarın Başlayacak Fırsatlar</Text>
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
        <HomeBottom/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
