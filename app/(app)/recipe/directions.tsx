import { View, Text } from 'react-native';
import React from 'react';
import CustomText from '~/components/text';

export default function Directions() {
  const directions = [
    {
      step: 'Step 01',
      direction:
        'To make the sauce, peel and finely slice the garlic and put it into a pan on a medium heat with the butter.',
    },
    {
      step: 'Step 02',
      direction:
        'To make the sauce, peel and finely slice the garlic and put it into a pan on a medium heat with the butter.',
    },
    {
      step: 'Step 03',
      direction:
        'To make the sauce, peel and finely slice the garlic and put it into a pan on a medium heat with the butter.',
    },
    {
      step: 'Step 04',
      direction:
        'To make the sauce, peel and finely slice the garlic and put it into a pan on a medium heat with the butter.',
    },
  ];
  return (
    <View className="flex-1 gap-3">
      {directions.map((direction, index) => (
        <View key={index} className="gap-2">
          <CustomText variant="title" className="text-[#095C37]">
            {direction.step}
          </CustomText>
          <CustomText variant="body">{direction.direction}</CustomText>
        </View>
      ))}
    </View>
  );
}
