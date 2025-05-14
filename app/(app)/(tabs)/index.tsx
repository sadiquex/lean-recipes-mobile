import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Image, TextInput, FlatList } from 'react-native';
import { Container } from '~/components/Container';
import CustomText from '~/components/text';
import TopRecipes from '~/components/home/top-recipes';

export default function HomeScreen() {
  return (
    <Container className="gap-6">
      <HomeScreenHeader />
      <SearchComponent />
      <RecipeCategories />
      <TopRecipes />
    </Container>
  );
}

const HomeScreenHeader = () => {
  return (
    <View className="flex flex-row items-center gap-2">
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/20284501/pexels-photo-20284501/free-photo-of-portrait-of-woman-in-hijab-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        className="h-12 w-12 rounded-full"
      />
      <CustomText variant="title">Jeffrey Dhama</CustomText>
    </View>
  );
};

// create a search component with a search icon from ionicons and a text input
const SearchComponent = () => {
  return (
    <View className="flex flex-row items-center gap-2 rounded-lg border border-gray-400 bg-gray-100 p-2">
      <Ionicons name="search" size={24} color="gray" />
      <TextInput placeholder="Search Recipes" className="flex-1" placeholderTextColor="gray" />
    </View>
  );
};

// horizontal scrollable list of recipe categories
// flatlist for horizontal categories
const RecipeCategories = () => {
  return (
    <View>
      <FlatList
        data={['Breakfast', 'Lunch', 'Dinner', 'Snack and drinks', 'Dessert']}
        renderItem={({ item }) => <RecipeCategoryChip category={item} />}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
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
