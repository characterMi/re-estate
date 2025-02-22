import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Property = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text className="text-3xl">Property {id}</Text>
    </View>
  );
};

export default Property;
