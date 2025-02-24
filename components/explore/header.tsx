import icons from "@/constants/icons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Filters from "../shared/filters";
import Search from "../shared/search";

const Header = ({
  propertiesCount,
}: {
  propertiesCount: number | undefined;
}) => {
  return (
    <View className="px-5">
      <View className="flex-row items-center justify-between mt-5">
        <TouchableOpacity
          className="flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
          onPress={() => router.back()}
        >
          <Image source={icons.backArrow} className="size-5" />
        </TouchableOpacity>

        <Text className="text-base text-center mr-2 font-rubik-medium text-black-300">
          Search for Your ideal home
        </Text>

        <Image source={icons.bell} className="size-6" />
      </View>

      <Search />

      <View className="mt-5">
        <Filters />

        <Text className="text-xl font-rubik-bold text-black-300 mt-5">
          Found {propertiesCount} Properties
        </Text>
      </View>
    </View>
  );
};

export default Header;
