import { FlatList, View, Pressable } from 'react-native';
import React from 'react';
import CustomText from '../text';
import RecipeCard from '../recipe-card';
import { router } from 'expo-router';

export default function TopRecipes() {
  return (
    <View className="gap-4">
      <View className="flex flex-row items-center justify-between">
        <CustomText variant="title">Top Recipes</CustomText>
        <Pressable onPress={() => router.push('/recipes')}>
          <CustomText variant="body" className="text-[#095C37]">
            See All
          </CustomText>
        </Pressable>
      </View>

      {/* the bottom part of the list isn't showing,  but the top part is */}
      <FlatList
        key="two-column-list"
        data={[{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }]}
        renderItem={({ item }) => (
          <View className="flex-1 p-1 py-8">
            <RecipeCard id={item.id} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 8 }}
        contentContainerStyle={{ gap: 8 }}
      />
    </View>
  );
}
