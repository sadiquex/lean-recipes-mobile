import { View, Image, Pressable } from 'react-native';
import React from 'react';
import CustomText from './text';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

interface RecipeCardProps {
  id?: string;
}

export default function RecipeCard({ id = '1' }: RecipeCardProps) {
  const handlePress = () => {
    router.push(`/recipe/${id}`);
  };

  return (
    <Pressable onPress={handlePress}>
      <View className="gap-4">
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/4144234/pexels-photo-4144234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          className="h-[200px] w-full rounded-xl"
        />

        <View className="gap-1">
          <CustomText variant="subtitle">Keto Garlic Butter Shrimp</CustomText>
          <CustomText variant="body">By Jeffrey Dhama</CustomText>

          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-2">
              <View className="flex flex-row items-center gap-1">
                <Ionicons name="time-outline" size={20} color="black" />
                <CustomText variant="body">10 mins</CustomText>
              </View>
              <View className="flex flex-row items-center gap-1">
                <Ionicons name="star-outline" size={20} color="black" />
                <CustomText variant="body">4.9</CustomText>
              </View>
            </View>

            <View className="flex flex-row items-center gap-1">
              <Ionicons name="bookmark-outline" size={20} color="black" />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
