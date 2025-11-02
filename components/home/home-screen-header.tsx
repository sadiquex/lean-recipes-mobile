import { View, Image } from 'react-native';
import CustomText from '../text';

const HomeScreenHeader = () => {
  return (
    <View className="flex flex-row items-center gap-2">
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/20284501/pexels-photo-20284501/free-photo-of-portrait-of-woman-in-hijab-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        className="h-12 w-12 rounded-full"
      />
      <CustomText variant="title">Jeffrey Dhama</CustomText>
    </View>
  );
};

export default HomeScreenHeader;
