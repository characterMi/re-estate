import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const SectionDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <View className="flex-row items-center justify-between mt-5">
    <Text className="text-xl font-rubik-bold text-black-300">{title}</Text>
    <TouchableOpacity onPress={() => router.push("/explore")}>
      <Text className="font-rubik-bold text-base text-primary-300">
        {description}
      </Text>
    </TouchableOpacity>
  </View>
);

export default SectionDescription;
