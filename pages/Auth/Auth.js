import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import Login from "../../components/Login";
import Register from "../../components/Register";
import styles from "./Auth.style";
import { useNavigation } from "@react-navigation/native";

const Auth = () => {
  const [buttonState, setButtonState] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const checkLogin = () => {
    if (email == "emre@mayzor.net" && password == "mayzor") {
      navigation.navigate("HomePage");
    } else {
      Alert.alert("bilgiler eşleşmedi");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>MAYZOR TEST CASE</Text>
      </View>
      <View style={styles.inner_container}>
        <View style={styles.auth_container}>
          <View style={styles.auth_buttons_container}>
            <View style={[styles.button_container, { borderTopLeftRadius: 5 }]}>
              <TouchableOpacity
                onPress={() => setButtonState(false)}
                style={buttonState ? styles.button : styles.button_focus}
              >
                <Text
                  style={
                    buttonState ? styles.button_text : styles.button_text_focus
                  }
                >
                  Giriş Yap
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.icon_container}>
              <Image
                style={styles.icon}
                source={require("../../assets/image7.png")}
              />
            </View>
            <View
              style={[styles.button_container, { borderTopRightRadius: 5 }]}
            >
              <TouchableOpacity
                onPress={() => setButtonState(true)}
                style={!buttonState ? styles.button : styles.button_focus}
              >
                <Text
                  style={
                    !buttonState ? styles.button_text : styles.button_text_focus
                  }
                >
                  Kayıt Ol
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {!buttonState ? (
            <Login
              onPressLogin={checkLogin}
              onChangeEmail={setEmail}
              onChangePassword={setPassword}
            />
          ) : (
            <Register />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Auth;
