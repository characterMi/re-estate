import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onPress?: () => void;
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="items-start w-60 h-80 relative"
    >
      <Image source={images.japan} className="size-full rounded-xl" />
      <Image
        className="size-full rounded-2xl absolute bottom-0"
        source={images.cardGradient}
      />

      <View className="flex-row items-center justify-between bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
          4.4
        </Text>
      </View>

      <View className="items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-rubik-extrabold text-white"
          numberOfLines={1}
        >
          Modern Apartment
        </Text>

        <Text className="text-base font-rubik text-white">
          22 W 15th 5t, New York
        </Text>

        <View className="w-full flex-row items-center justify-between">
          <Text className="text-xl font-rubik-extrabold text-white">
            $2,500
          </Text>

          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
    >
      <View className="flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
          4.4
        </Text>
      </View>

      <Image source={images.newYork} className="w-full h-40 rounded-lg" />

      <View className="mt-2">
        <Text
          className="text-base font-rubik-bold text-black-300"
          numberOfLines={1}
        >
          Cozy Studio
        </Text>

        <Text className="text-xs font-rubik text-black-200">
          22 W 15th 5t, New York
        </Text>

        <View className="mt-2 flex-row items-center justify-between">
          <Text className="text-base font-rubik-bold text-primary-300">
            $2,500
          </Text>

          <Image
            source={icons.heart}
            className="size-5 mr-2"
            tintColor={"#191d31"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
