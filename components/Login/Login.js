import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./Login.style";

const Login = ({ onChangeEmail, onChangePassword, onPressLogin }) => {
  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <Image style={styles.icon} source={require("../../assets/mail.png")} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="E-Mail Adresi"
        />
      </View>
      <View style={styles.input_container}>
        <Image style={styles.icon_password} source={require("../../assets/password.png")} />

        <TextInput
          onChangeText={onChangePassword}
          style={styles.input}
          placeholder="Şifre"
        />
      </View>
      <TouchableOpacity style={styles.forgot}>
        <Text>Şifreni mi Unuttun?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLogin} style={styles.button}>
        <Text style={styles.button_text}>Şimdi Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
