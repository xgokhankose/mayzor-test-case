import { TouchableOpacity, Text, Image } from "react-native";
import styles from "./HomeDateButton.style";

const HomeDateButton = ({ isFocus, date }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isFocus ? { backgroundColor: "#FF9600" } : { backgroundColor: "#fff" },
      ]}
    >
      <Image
        source={
          isFocus
            ? require("../../assets/calendar-focus.png")
            : require("../../assets/calendar.png")
        }
      />
      <Text
        style={[
          styles.text,
          isFocus ? { color: "#fff" } : { color: "#606060" },
        ]}
      >
        {date}
      </Text>
    </TouchableOpacity>
  );
};
export default HomeDateButton;
