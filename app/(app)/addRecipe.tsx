import { View, Text } from 'react-native';
import { Container } from '~/components/Container';

export default function AddRecipeScreen() {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>Add New Recipe</Text>
      </View>
    </Container>
  );
}
