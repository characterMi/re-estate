import { Card, FeaturedCard } from "@/components/cards";
import Filters from "@/components/filters";
import Search from "@/components/search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full px-5">
      <View>
        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row">
            <Image source={images.avatar} className="size-12 rounded-full" />

            <View className="items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">
                Good morning
              </Text>
              <Text className="text-base font-rubik-medium text-black-300">
                Abolfazl
              </Text>
            </View>
          </View>

          <Image source={icons.bell} className="size-6" />
        </View>
      </View>

      <Search />

      <View className="my-5">
        <SectionDescription title="Featured" description="See all" />

        <View className="flex-row gap-5 mt-5">
          <FeaturedCard />
          <FeaturedCard />
        </View>
      </View>

      <SectionDescription title="Our Recommendation" description="See all" />
      <Filters />

      <View className="flex-row gap-5 mt-5">
        <Card />
        <Card />
      </View>
    </SafeAreaView>
  );
}

const SectionDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <View className="flex-row items-center justify-between">
    <Text className="text-xl font-rubik-bold text-black-300">{title}</Text>
    <TouchableOpacity>
      <Text className="font-rubik-bold text-base text-primary-300">
        {description}
      </Text>
    </TouchableOpacity>
  </View>
);
