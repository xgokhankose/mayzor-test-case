import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import ProductDetailImage from "../../components/ProductDetailImage";
import ProductDetailDescription from "../../components/ProductDetailDescription";
import { useNavigation } from "@react-navigation/native";
import ProductInfo from "../../components/ProductInfo";
import Rating from "../../components/Rating";
import ProductDetailBottomButtons from "../../components/ProductDetailBottomButtons";
import DetailNextPreviousButtons from "../../components/DetailNextPreviousButtons";
import DetailBottomProduct from "../../components/DetailBottomProduct";
import styles from "./ProductDetail.style";
import AddToBasket from "../../components/AddToBasket";

const ProductDetail = () => {
  const navigation = useNavigation();

  const navigateHome = () => {
    navigation.navigate("HomePage");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ProductDetailImage onPress={navigateHome} />
        <ProductDetailDescription />
        <ProductInfo />
        <Rating />
        <ProductDetailBottomButtons />
        <DetailNextPreviousButtons title={"Bugünün Diğer 4 Fırsatı"} />
        <View style={styles.inner_container}>
          <DetailBottomProduct />
          <DetailBottomProduct />
        </View>
        <AddToBasket/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProductDetail;
