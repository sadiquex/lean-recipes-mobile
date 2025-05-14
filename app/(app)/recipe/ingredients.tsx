import { View, Text } from 'react-native';
import React from 'react';
import CustomText from '~/components/text';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Ingredients() {
  const ingredients = [
    { name: '2 cloves of garlic', quantity: '1 cup' },
    { name: '50g unsalted butter', quantity: '2 cups' },
    { name: '50g plain flour', quantity: '3 cups' },
    { name: '600ml semi-skimmed milk', quantity: '3 cups' },
    { name: '500g broccoli', quantity: '3 cups' },
    { name: '75g mature Cheddar cheese', quantity: '3 cups' },
  ];

  return (
    <View className="gap-3">
      {ingredients.map((ingredient, index) => (
        <CustomText variant="body" key={index} className="flex items-center gap-2">
          {/* <Text className="text-4xl text-[#095C37]">•</Text> */}
          {/* bullet icon */}
          <Ionicons name="ellipse" size={10} color="#095C37" />
          <Text className="px-4 text-lg">{ingredient.name}</Text>
        </CustomText>
      ))}
    </View>
  );
}
