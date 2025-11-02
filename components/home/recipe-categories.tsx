import { ScrollView, View } from 'react-native';
import CustomText from '../text';

// horizontal scrollable list of recipe categories
const RecipeCategories = () => {
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snack and drinks', 'Dessert'];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}>
      {categories.map((category) => (
        <RecipeCategoryChip key={category} category={category} />
      ))}
    </ScrollView>
  );
};

// create a chip for each recipe category

const RecipeCategoryChip = ({ category }: { category: string }) => {
  return (
    <View className="flex flex-row items-center gap-2 rounded-lg border border-gray-400 bg-gray-100 p-2">
      <CustomText variant="body">{category}</CustomText>
    </View>
  );
};

export default RecipeCategories;
