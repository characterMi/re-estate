import { useAppwrite } from "@/hooks/useAppwrite";
import { getLatestProperties, getProperties } from "@/lib/appwrite";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { FlatList, View } from "react-native";
import { Card, FeaturedCard } from "./cards";
import { CardLoader, FeaturedCardLoader } from "./cards-loader";
import Filters from "./filters";
import NoResults from "./no-results";
import Search from "./search";
import SectionDescription from "./section-description";
import UserProfile from "./user-profile";

export const Properties = ({ children }: { children: React.ReactNode }) => {
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

  return (
    <FlatList
      data={data}
      ListEmptyComponent={loading ? <CardLoader /> : <NoResults />}
      renderItem={({ item }) => (
        <Card
          item={item}
          onPress={() => router.push(`/properties/${item.$id}`)}
        />
      )}
      keyExtractor={(item) => item.$id}
      contentContainerStyle={{ paddingBottom: 100 }}
      columnWrapperStyle={{ gap: 10, paddingHorizontal: 15 }}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View className="px-5">
          <UserProfile />

          <Search />

          {/* Featured Properties */}
          {children}

          <SectionDescription
            title="Our Recommendation"
            description="See all"
          />
          <Filters />
        </View>
      }
    />
  );
};

export const FeaturedProperties = () => {
  const { data, loading } = useAppwrite({
    fn: getLatestProperties,
  });

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
        ListEmptyComponent={
          loading ? <FeaturedCardLoader /> : <NoResults isFeatured />
        }
        keyExtractor={(item) => item.toString()}
        horizontal
        contentContainerStyle={{ gap: 15, marginTop: 15 }}
        bounces={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
