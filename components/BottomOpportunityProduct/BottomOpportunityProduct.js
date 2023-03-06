import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./BottomOpportunityProduct.style";

const BottomOpportunityProduct = ({ isVoted }) => {
  return (
    <TouchableOpacity style={styles.container}>
      {isVoted ? (
        <>
        <View style={styles.voted_container}>
        </View>
        <Text style={styles.voted_text}>OY VERDİNİZ!</Text>
        </>
        
        
      ) : null}
      <View style={{ justifyContent: "center" }}>
        <View style={styles.percent}></View>
        <View style={styles.inner_container}>
          <View style={styles.inner_top_container}>
            <Text style={styles.inner_top_container_title}>Oy Oranı : %50</Text>
          </View>
          <Image
            style={styles.image}
            source={require("../../assets/bottom-product.png")}
          />
          <Text style={styles.product_title}>DeFacto Slim Fit Kapü...</Text>

          <Text style={styles.price_with_line}>11,32₺'den satıldı</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default BottomOpportunityProduct;
