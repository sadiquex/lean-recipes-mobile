import '../global.css';
import { Stack, SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';
import { useRouter, useSegments } from 'expo-router';
import { View } from 'react-native';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// This is the main layout of the app
// It wraps your pages with the providers they need
export default function RootLayout() {
  const segments = useSegments();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(true);

  useEffect(() => {
    // Perform any initialization here
    const initialize = async () => {
      try {
        // Add any async initialization logic here
        // For example, loading user preferences, checking auth state, etc.

        // For now, we'll just add a small delay to ensure proper mounting
        await new Promise((resolve) => setTimeout(resolve, 100));

        setIsReady(true);
      } catch (error) {
        console.error('Error during initialization:', error);
        setIsReady(true); // Still set ready even if there's an error
      }
    };

    initialize();
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const inOnboarding = segments[0] === '(onboarding)';
    const inAuth = segments[0] === '(auth)';
    const inApp = segments[0] === '(app)';

    // Only redirect to onboarding if we're not in any of the main sections
    // and haven't completed onboarding
    if (!inOnboarding && !inAuth && !inApp && !hasCompletedOnboarding) {
      router.replace('/(onboarding)');
    }

    // If we're in the app section, mark onboarding as completed
    if (inApp) {
      setHasCompletedOnboarding(true);
    }

    // Hide splash screen once we're ready
    SplashScreen.hideAsync();
  }, [isReady, segments, hasCompletedOnboarding]);

  if (!isReady) {
    return null; // or a loading screen if you prefer
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(onboarding)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(app)" />
    </Stack>
  );
}
