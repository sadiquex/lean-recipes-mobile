import {
  View,
  Pressable,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import CustomText from '../text';
import DropDownPicker from 'react-native-dropdown-picker';

type DurationType = 'minutes' | 'hours';

const AddRecipeForm = () => {
  const [image, setImage] = useState<string | null>(null);
  const [duration, setDuration] = useState<DurationType>('minutes');
  const [durationValue, setDurationValue] = useState('');
  const [open, setOpen] = useState(false);
  const [items] = useState([
    { label: 'Minutes', value: 'minutes' },
    { label: 'Hours', value: 'hours' },
  ]);

  const pickImage = async () => {
    // Request permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to upload images!');
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const renderFormContent = () => (
    <View className="gap-8 pb-8">
      {/* box with border for recipe image upload */}
      <Pressable onPress={pickImage}>
        <View className="h-[250px] w-full items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-gray-200">
          {image ? (
            <View className="h-full w-full items-center justify-center">
              <Image
                source={{ uri: image }}
                className="h-full w-full"
                style={{ resizeMode: 'contain' }}
              />
            </View>
          ) : (
            <>
              <Ionicons name="image-outline" size={30} color="black" />
              <CustomText variant="body-primary">Upload Image</CustomText>
              <CustomText variant="body-primary">JPEG or PNG (Max size: 10MB)</CustomText>
            </>
          )}
        </View>
      </Pressable>

      {/* recipe name */}
      <View className="gap-2">
        <CustomText variant="subtitle">Recipe Name</CustomText>
        <TextInput
          placeholder="e.g. Beef Sauce"
          className="rounded-lg border border-gray-300 p-3"
        />
      </View>

      {/* description */}
      <View className="gap-2">
        <CustomText variant="subtitle">Description</CustomText>
        <TextInput
          placeholder="Share the story behind your recipe and what makes it special"
          className="h-[100px] rounded-lg border border-gray-300 p-3"
        />
      </View>

      {/* servings */}
      <View className="gap-2">
        <CustomText variant="subtitle">Servings</CustomText>
        <TextInput placeholder="e.g. 4" className="rounded-lg border border-gray-300 p-3" />
      </View>

      {/* cook duration */}
      <View className="gap-2">
        <CustomText variant="subtitle">Cook Duration</CustomText>
        <View className="flex-row items-center gap-2">
          <TextInput
            placeholder="e.g. 30"
            className="rounded-lg border border-gray-300 p-3"
            keyboardType="numeric"
            value={durationValue}
            onChangeText={setDurationValue}
          />

          <View className="flex-1">
            <DropDownPicker
              open={open}
              value={duration}
              items={items}
              setOpen={setOpen}
              setValue={setDuration}
              style={{
                borderColor: '#d1d5db',
                borderRadius: 8,
                height: 48,
                backgroundColor: 'transparent',
              }}
              textStyle={{
                fontSize: 16,
              }}
              dropDownContainerStyle={{
                borderColor: '#d1d5db',
                borderRadius: 8,
              }}
              zIndex={1000}
            />
          </View>
        </View>
      </View>

      {/* ingredients */}
      <View className="gap-2">
        <CustomText variant="subtitle">Ingredients</CustomText>
        {[1, 2, 3].map((item, i) => (
          <View key={i} className="flex-row items-center gap-2">
            <TextInput
              placeholder="e.g. 1 cup of rice"
              className="flex-1 rounded-lg border border-gray-300 p-3"
            />
            <Pressable>
              <Ionicons name="trash-outline" size={26} color="black" />
            </Pressable>
          </View>
        ))}
        {/* green outlined button to add more ingredients */}
        <Pressable className="flex-row items-center justify-center gap-2 rounded-lg border border-primary p-3">
          <CustomText variant="body-primary">+ Add Ingredient</CustomText>
        </Pressable>
      </View>

      {/* directions */}
      <View className="gap-2">
        <CustomText variant="subtitle">Directions</CustomText>
        {[1, 2, 3].map((item, i) => (
          <View key={i} className="gap-2">
            <CustomText variant="subtitle">0{item}</CustomText>
            <View className="flex-row items-center gap-2">
              <TextInput
                placeholder="Add another step"
                className="flex-1 rounded-lg border border-gray-300 p-3"
              />
              <Pressable>
                <Ionicons name="trash-outline" size={26} color="black" />
              </Pressable>
            </View>
          </View>
        ))}
        {/* green outlined button to add more ingredients */}
        <Pressable className="flex-row items-center justify-center gap-2 rounded-lg border border-primary p-3">
          <CustomText variant="body-primary">+ Add Step</CustomText>
        </Pressable>
      </View>

      {/* button to save recipe */}

      <Pressable className="rounded-lg bg-[#014901] p-3">
        <CustomText variant="body-primary" className="text-center text-white">
          Save Recipe
        </CustomText>
      </Pressable>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1">
      <FlatList
        data={[1]} // Single item since we're using it as a container
        renderItem={() => renderFormContent()}
        keyExtractor={() => 'form-content'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </KeyboardAvoidingView>
  );
};

export default AddRecipeForm;
