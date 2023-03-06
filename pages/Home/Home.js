import {
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import FlatListHeader from "../../components/FlatListHeader";
import HomePageButtons from "../../components/HomePageButtons";
import HomeHeader from "../../components/HomeHeader";
import Product from "../../components/Product";
import styles from "./Home.style";
import HomeDateButton from "../../components/HomeDateButton";
import BottomProduct from "../../components/BottomProduct";
import BottomOpportunityProduct from "../../components/BottomOpportunityProduct";
import HomeBottomButton from "../../components/HomeBottomButton";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const navigateDetail= () => {
    navigation.navigate("ProductDetailPage")
  }

  return (
    <SafeAreaView>
      <ScrollView bounces={false} contentContainerStyle={styles.container}>
        <HomeHeader />
        <FlatListHeader />
        <Product onPress={navigateDetail} />
        <Product onPress={navigateDetail} />
        <Product onPress={navigateDetail} />
        <Product onPress={navigateDetail} />
        <HomePageButtons title={"Yarın Başlayacak Fırsatlar"} />
        <View style={styles.home_date_button_container}>
          <HomeDateButton date={"21 Ara - Salı"} isFocus={true} />
          <HomeDateButton date={"22 Ara - Çarşamba"} isFocus={false} />
        </View>
        <View style={styles.home_date_button_container}>
          <BottomProduct />
          <BottomProduct />
        </View>
        <HomePageButtons title={"Kaçırdığınız Fırsatlar"} />
        <View style={styles.home_date_button_container}>
          <BottomOpportunityProduct isVoted={false} />
          <BottomOpportunityProduct isVoted={true} />
        </View>
        <HomeBottomButton />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
