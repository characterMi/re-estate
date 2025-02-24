import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, View } from "react-native";

const Location = ({ address }: { address: string | undefined }) => (
  <View className="mt-7">
    <Text className="text-black-300 text-xl font-rubik-bold">Location</Text>
    <View className="flex flex-row items-center justify-start mt-4 gap-2">
      <Image source={icons.location} className="w-7 h-7" />
      <Text className="text-black-200 text-sm font-rubik-medium">
        {address}
      </Text>
    </View>

    <Image source={images.map} className="h-52 w-full mt-5 rounded-xl" />
  </View>
);

export default Location;
