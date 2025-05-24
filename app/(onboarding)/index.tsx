import { View, Dimensions, Pressable } from 'react-native';
import React, { useRef, useState, useCallback } from 'react';
import { router } from 'expo-router';
import CustomText from '~/components/text';
import { Container } from '~/components/Container';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const onboardingSteps = [
  {
    title: 'Discover Recipes',
    subtitle: 'Explore a world of flavor. Find your next favorite dish with just a tap.',
  },
  {
    title: 'Create Your Own Recipes',
    subtitle: 'Share your culinary creativity by saving and organizing your own recipes.',
  },
  {
    title: 'Upgrade Your Kitchen Game',
    subtitle: 'Browse, search, and filter recipes based on what you have in your kitchen',
  },
];

function DotIndicator({
  index,
  scrollX,
}: {
  index: number;
  scrollX: Animated.SharedValue<number>;
}) {
  const dotStyle = useAnimatedStyle(() => {
    const input = scrollX.value / SCREEN_WIDTH;
    const scale = interpolate(input, [index - 1, index, index + 1], [1, 1.5, 1], 'clamp');
    const opacity = interpolate(input, [index - 1, index, index + 1], [0.5, 1, 0.5], 'clamp');

    return {
      transform: [{ scale: withSpring(scale) }],
      opacity: withSpring(opacity),
    };
  });

  return <Animated.View style={dotStyle} className="h-2 w-2 rounded-full bg-[#095C37]" />;
}

export default function OnboardingScreen() {
  const scrollX = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const scrollViewRef = useRef<Animated.ScrollView>(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const handleContinue = useCallback(async () => {
    if (isNavigating) return;

    if (currentIndex < onboardingSteps.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: SCREEN_WIDTH * (currentIndex + 1),
        animated: true,
      });
    } else {
      try {
        setIsNavigating(true);
        // Navigate to the main app using the correct path
        await router.replace({
          pathname: '/(app)/(tabs)',
          params: {},
        });
      } catch (error) {
        console.error('Navigation error:', error);
        setIsNavigating(false);
      }
    }
  }, [currentIndex, isNavigating]);

  const handleMomentumScrollEnd = useCallback((event: any) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    setCurrentIndex(newIndex);
  }, []);

  return (
    <Container className="flex-1 bg-white">
      {/* Progress Indicators */}
      <View className="flex-row justify-center gap-2 py-4">
        {onboardingSteps.map((_, index) => (
          <DotIndicator key={index} index={index} scrollX={scrollX} />
        ))}
      </View>

      {/* Swipeable Content */}
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        onMomentumScrollEnd={handleMomentumScrollEnd}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index}
            style={{ width: SCREEN_WIDTH }}
            className="flex-1 items-center justify-center px-8">
            <View className="items-center gap-4">
              <CustomText variant="title" className="text-center text-3xl">
                {step.title}
              </CustomText>
              <CustomText variant="body" className="text-center text-lg text-gray-600">
                {step.subtitle}
              </CustomText>
            </View>
          </View>
        ))}
      </Animated.ScrollView>

      {/* Continue Button */}
      <View className="mb-8 px-4">
        <Pressable
          onPress={handleContinue}
          disabled={isNavigating}
          className={`rounded-lg bg-[#095C37] py-4 ${isNavigating ? 'opacity-50' : ''}`}>
          <CustomText variant="body" className="text-center text-white">
            {currentIndex === onboardingSteps.length - 1 ? 'Get Started' : 'Continue'}
          </CustomText>
        </Pressable>
      </View>
    </Container>
  );
}
