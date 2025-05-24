import { View, Pressable } from 'react-native';
import { Container } from '~/components/Container';
import CustomText from '~/components/text';
import Ionicons from '@expo/vector-icons/Ionicons';
import AddRecipeForm from '~/components/addRecipe/add-recipe-form';

export default function AddRecipeScreen() {
  return (
    <Container className="gap-6">
      <Header />
      <CustomText variant="title">Recipe General Information</CustomText>
      <AddRecipeForm />
    </Container>
  );
}

const Header = () => {
  return (
    <View className="flex flex-row items-center justify-between">
      {/* back icon */}
      <Pressable className="items-center justify-center rounded-full border p-2">
        <Ionicons name="chevron-back" size={16} color="black" />
      </Pressable>
      <CustomText variant="title">Add Recipe</CustomText>
      <View />
    </View>
  );
};
