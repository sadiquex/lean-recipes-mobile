import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import CustomText from '~/components/text';
import { Container } from '~/components/Container';
import Ionicons from '@expo/vector-icons/Ionicons';
import Ingredients from './ingredients';
import Directions from './directions';

export default function RecipeDetails() {
  const { id } = useLocalSearchParams();
  // states
  const [activeTab, setActiveTab] = useState<'ingredients' | 'directions'>('ingredients');

  return (
    <>
      <ScrollView className="flex-1">
        {/* TODO: add parallax effect for */}
        <View className="relative">
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1200',
            }}
            className="h-[300px] w-full"
          />
        </View>
        <Container className="gap-4 py-4">
          {/* image, name of person, and time it was added */}
          <View className="flex flex-row items-center gap-3">
            <Image
              source={{ uri: 'https://picsum.photos/400/300' }}
              className="h-10 w-10 rounded-full"
            />
            <CustomText variant="subtitle">Jeffrey Dhama</CustomText>
            <CustomText variant="body">10th July, 2023</CustomText>
          </View>

          <CustomText variant="title">Keto Sausage Balls</CustomText>

          <CustomText variant="body">
            Quick and simple, keto and gluten free. Perfect Game Day snack! I like this recipe best
            with hot sausage for a little kick, but you can make it to your preference. Serve plain
            or with honey mustard.
          </CustomText>

          {/* cooking time, difficulty, servings */}
          <View className="flex flex-row justify-between">
            <View className="flex flex-row items-center gap-3">
              <View className="flex flex-row items-center gap-1">
                <Ionicons name="time-outline" size={24} color="black" />
                <CustomText variant="body">30 minutes</CustomText>
              </View>
              <View className="flex flex-row items-center gap-1">
                <Ionicons name="timer-outline" size={24} color="black" />
                <CustomText variant="body">Easy</CustomText>
              </View>
              <View className="flex flex-row items-center gap-1">
                <Ionicons name="people-outline" size={24} color="black" />
                <CustomText variant="body">4</CustomText>
              </View>
            </View>

            {/* share and bookmark button */}
            <View className="flex flex-row items-center gap-3">
              <Ionicons name="share-social" size={24} color="black" />
              <Ionicons name="bookmark-outline" size={24} color="black" />
            </View>
          </View>
          {/* tab for ingredients and directions */}
          <View className="flex w-full flex-row items-center gap-2 py-4">
            {/* ingredients tab */}
            <TouchableOpacity
              className={`w-1/2 items-center rounded-lg px-6 py-3 ${activeTab === 'ingredients' ? ' bg-[#095C37] ' : 'bg-[#dcddde]'}`}
              onPress={() => setActiveTab('ingredients')}>
              <CustomText
                variant="body"
                className={`${activeTab === 'ingredients' ? 'text-white' : 'text-black'} `}>
                Ingredients
              </CustomText>
            </TouchableOpacity>
            {/* directions tab */}
            <TouchableOpacity
              className={`w-1/2 items-center rounded-lg  px-6 py-3 ${activeTab === 'directions' ? ' bg-[#095C37] ' : 'bg-[#dcddde]'}`}
              onPress={() => setActiveTab('directions')}>
              <CustomText
                variant="body"
                className={`${activeTab === 'directions' ? 'text-white' : 'text-black'}`}>
                Directions
              </CustomText>
            </TouchableOpacity>
          </View>
          {activeTab === 'ingredients' && <Ingredients />}
          {activeTab === 'directions' && <Directions />}
        </Container>
      </ScrollView>
    </>
  );
}
