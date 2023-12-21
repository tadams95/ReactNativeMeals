import { View, Text, StyleSheet } from "react-native";

export default function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#FAF9F7",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#FAF9F7",
    borderBottomWidth: 1,
  },
});
