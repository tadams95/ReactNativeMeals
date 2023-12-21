import { StyleSheet, Text, View } from "react-native";

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: "#504A40",
  },
  itemText: {
    color: "#FAF9F7",
    textAlign: "center",
  },
});
