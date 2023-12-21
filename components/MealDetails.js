import { View, Text, StyleSheet } from "react-native";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  textStyle,
}) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, textStyle]}>{duration} minutes</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
