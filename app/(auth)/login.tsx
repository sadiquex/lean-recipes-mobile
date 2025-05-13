import { View, Text } from 'react-native';
import { Container } from '~/components/Container';
import { Button } from '~/components/Button';
import { Link } from 'expo-router';

export default function LoginScreen() {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
        <Text style={{ fontSize: 24 }}>Login</Text>
        <Link href="/register" asChild>
          <Button title="Don't have an account? Register" />
        </Link>
      </View>
    </Container>
  );
}
