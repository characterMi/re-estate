import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import { Image, Text, View } from "react-native";

const UserProfile = () => {
  const { user } = useGlobalContext();

  return (
    <View className="flex-row items-center justify-between mt-5">
      <View className="flex-row">
        <Image
          source={{ uri: user?.avatar }}
          className="size-12 rounded-full"
        />

        <View className="items-start ml-2 justify-center">
          <Text className="text-xs font-rubik text-black-100">
            Good morning
          </Text>
          <Text className="text-base font-rubik-medium text-black-300">
            {user?.name}
          </Text>
        </View>
      </View>

      <Image source={icons.bell} className="size-6" />
    </View>
  );
};

export default UserProfile;
