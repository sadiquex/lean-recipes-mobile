import { View, Pressable } from 'react-native';
import React from 'react';
import CustomText from '../text';
import RecipeCard from '../recipe-card';
import { router } from 'expo-router';

export default function TopRecipes() {
  const recipes = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];

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

      {/* Render recipes in a grid layout */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {recipes.map((item) => (
          <View key={item.id} style={{ width: '48%', paddingVertical: 8 }}>
            <RecipeCard id={item.id} />
          </View>
        ))}
      </View>
    </View>
  );
}
