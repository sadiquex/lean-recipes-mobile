import { View, FlatList, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Container } from '~/components/Container';
import CustomText from '~/components/text';
import RecipeCard from '~/components/recipe-card';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack } from 'expo-router';

export default function AllRecipesScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual data from your backend
  const recipes = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
  ];

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'All Recipes',
          headerShown: false,
        }}
      />
      <Container className="gap-4">
        {/* Search Bar */}
        <View className="flex flex-row items-center gap-2 rounded-lg border border-gray-400 bg-gray-100 p-2">
          <Ionicons name="search" size={24} color="gray" />
          <TextInput
            placeholder="Search Recipes"
            className="flex-1"
            placeholderTextColor="gray"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Recipe Grid */}
        <FlatList
          key="recipes-grid"
          data={recipes}
          renderItem={({ item }) => (
            <View className="flex-1 p-1">
              <RecipeCard id={item.id} />
            </View>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ gap: 8 }}
          contentContainerStyle={{ gap: 8, paddingBottom: 20 }}
        />
      </Container>
    </>
  );
}
