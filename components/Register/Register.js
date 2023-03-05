import { View, Text } from "react-native";
import styles from "./Register.style"
const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title_text}>Şimdi </Text>
        <Text style={[styles.title_text,{fontWeight:"bold"}]}>Kayıt Ol!</Text>
      </View>
      <Text style={styles.bottom_text}>Kayıt ol tab sayfası</Text>
    </View>
  );
};
export default Register;
