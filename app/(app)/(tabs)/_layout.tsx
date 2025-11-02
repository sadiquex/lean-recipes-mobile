import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Haptics from 'expo-haptics';
import { TouchableOpacity } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#095C37',
        tabBarInactiveTintColor: '#aeb2b8',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarButton: (props) => {
          const { children, onPress, ...otherProps } = props;
          return (
            <TouchableOpacity
              {...(otherProps as any)}
              activeOpacity={0.7}
              onPress={(e) => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                onPress?.(e);
              }}
              style={otherProps.style}>
              {children}
            </TouchableOpacity>
          );
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="addRecipe"
        options={{
          title: 'Add Recipe',
          tabBarIcon: ({ color, size }) => <Ionicons name="add" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: 'Favourites',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
