import { Card, FeaturedCard } from "@/components/cards";
import Filters from "@/components/filters";
import Search from "@/components/search";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const { user } = useGlobalContext();
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        columnWrapperStyle={{ gap: 15, paddingHorizontal: 10 }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
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

            <Search />

            <View className="my-5">
              <SectionDescription title="Featured" description="See all" />

              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={({ item }) => <FeaturedCard />}
                keyExtractor={(item) => item.toString()}
                horizontal
                contentContainerStyle={{ gap: 15, marginTop: 15 }}
                bounces={false}
                showsHorizontalScrollIndicator={false}
              />
            </View>

            <SectionDescription
              title="Our Recommendation"
              description="See all"
            />
            <Filters />
          </View>
        }
      />
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
