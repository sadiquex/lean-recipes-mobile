import { View, Text } from 'react-native';
import { Container } from '~/components/Container';

export default function FavouritesScreen() {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>Favourite Recipes</Text>
      </View>
    </Container>
  );
}
