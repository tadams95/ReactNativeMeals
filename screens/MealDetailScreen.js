import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context";

export default function MealDetailScreen({ route, navigation }) {
  // const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="#FAF9F7"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 8,
    textAlign: "center",
    color: "#FAF9F7",
  },
  detailText: {
    color: "#FAF9F7",
  },
  listContainer: {
    width: "90%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
