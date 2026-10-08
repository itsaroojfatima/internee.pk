import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type AppTabScreenProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  subtitle: string;
};

export function AppTabScreen({
  icon,
  title,
  subtitle,
}: AppTabScreenProps) {
  return (
    <View style={styles.content}>
      <MaterialCommunityIcons name={icon} size={42} color="#EC1765" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 72,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 14,
    color: "#172033",
    fontSize: 26,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 8,
    color: "#7C8495",
    fontSize: 15,
    textAlign: "center",
  },
});
