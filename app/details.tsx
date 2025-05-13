import { Stack, useLocalSearchParams } from 'expo-router';
import { Container } from '~/components/Container';
import { Text } from 'react-native';

export default function Details() {
  const { name } = useLocalSearchParams<{ name: string }>();

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <Container>
        <Text>Hello, {name}!</Text>
      </Container>
    </>
  );
}
