import Ionicons from '@expo/vector-icons/Ionicons';
import { View, TextInput, ScrollView, RefreshControl } from 'react-native';
import { useState, useCallback } from 'react';
import { Container } from '~/components/Container';
import TopRecipes from '~/components/home/top-recipes';
import HomeScreenHeader from '~/components/home/home-screen-header';
import RecipeCategories from '~/components/home/recipe-categories';
import * as Haptics from 'expo-haptics';

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    // Simulate data refresh - replace with your actual refresh logic
    try {
      // Add your data fetching logic here
      // For example: await fetchRecipes(), await fetchCategories(), etc.
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Error refreshing data:', error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  return (
    <Container className="gap-6">
      <HomeScreenHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#095C37" />
        }>
        <SearchComponent />
        <RecipeCategories />
        <TopRecipes />
      </ScrollView>
    </Container>
  );
}

// create a search component with a search icon from ionicons and a text input
const SearchComponent = () => {
  return (
    <View className="flex flex-row items-center gap-2 rounded-lg border border-gray-400 bg-gray-100 p-2">
      <Ionicons name="search" size={24} color="gray" />
      <TextInput placeholder="Search Recipes" className="flex-1" placeholderTextColor="gray" />
    </View>
  );
};
