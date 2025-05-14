import { Tabs, Stack } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="recipe/[id]"
        options={{
          headerTitle: 'Recipe Details',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
