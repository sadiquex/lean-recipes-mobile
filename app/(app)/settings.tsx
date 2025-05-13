import { View, Text } from 'react-native';
import { Container } from '~/components/Container';

export default function SettingsScreen() {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>Settings</Text>
      </View>
    </Container>
  );
}
