import { Card, FeaturedCard } from "@/components/cards";
import Filters from "@/components/filters";
import Search from "@/components/search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useAppwrite } from "@/hooks/useAppwrite";
import { getLatestProperties, getProperties } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const { user } = useGlobalContext();

  const { data, loading } = useAppwrite({
    fn: getLatestProperties,
  });

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={data}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size="large" className="text-primary-300 mt-5" />
          ) : (
            <NoResults />
          )
        }
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => router.push(`/properties/${item.$id}`)}
          />
        )}
        keyExtractor={(item) => item.$id}
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

            <FilteredProperties />

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

const FilteredProperties = () => {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const { data, loading, refetch } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    });
  }, [params.filter, params.query]);

  if (loading)
    return <ActivityIndicator size="large" className="text-primary-300 my-5" />;

  if (!data || data.length === 0) return <NoResults />;

  return (
    <View className="my-5">
      <SectionDescription title="Featured" description="See all" />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <FeaturedCard
            item={item}
            onPress={() => router.push(`/properties/${item.$id}`)}
          />
        )}
        keyExtractor={(item) => item.toString()}
        horizontal
        contentContainerStyle={{ gap: 15, marginTop: 15 }}
        bounces={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

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

const NoResults = () => (
  <View className="items-center my-5">
    <Image
      source={images.noResult}
      className="w-11/12 h-80"
      resizeMode="contain"
    />
    <Text className="text-2xl font-rubik-bold text-black-300 mt-5">
      No results!
    </Text>
    <Text className="text-base text-black-100 mt-2">
      We could not find any results
    </Text>
  </View>
);
