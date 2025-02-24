import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import { logout } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import {
  Alert,
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => (
  <TouchableOpacity
    className="flex-row items-center justify-between py-3"
    onPress={onPress}
  >
    <View className="flex-row items-center gap-3">
      <Image className="size-6" source={icon} />
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>
        {title}
      </Text>
    </View>

    {showArrow && <Image source={icons.rightArrow} className="size-5" />}
  </TouchableOpacity>
);

const Profile = () => {
  const { user, refetch } = useGlobalContext();

  async function handleLogout() {
    const result = await logout();

    if (result) {
      Alert.alert("Success", "You have been logged out successfully.");
      refetch();
    } else {
      Alert.alert("Error", "Something went wrong.");
    }
  }

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-24 px-7"
      >
        <View className="flex-row items-center justify-between mt-5">
          <Text className="text-left font-rubik-bold">Profile</Text>

          <Image source={icons.bell} className="size-5" />
        </View>

        <View className="flex-row justify-center mt-5">
          <View className="flex-col items-center relative mt-5">
            <Image
              source={{ uri: user?.avatar }}
              className="size-44 relative rounded-l-full"
            />

            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>

            <Text className="text-2xl font-rubik-bold mt-2">{user?.name}</Text>
          </View>
        </View>

        <View className="flex-col mt-10">
          <SettingsItem icon={icons.calendar} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="Payments" />
        </View>

        <View className="mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((item) => (
            <SettingsItem key={item.title} {...item} />
          ))}
        </View>

        <View className="mt-5 border-t pt-5 border-primary-200">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            onPress={handleLogout}
            textStyle="text-danger"
            showArrow={false}
          />
        </View>

        <Text className="text-center text-base text-black-200 mt-5">
          Made with 💙 by{" "}
          <Text className="text-primary-300 font-rubik-medium">
            Abolfazl Taghadosi
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
