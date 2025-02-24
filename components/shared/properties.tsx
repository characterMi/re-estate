import { useAppwrite } from "@/hooks/useAppwrite";
import { getLatestProperties, getProperties } from "@/lib/appwrite";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { FlatList, View } from "react-native";
import ExploreHeader from "../explore/header";
import HomeHeader from "../home/header";
import { Card, FeaturedCard } from "./cards";
import { CardLoader, FeaturedCardLoader } from "./cards-loader";
import NoResults from "./no-results";
import SectionDescription from "./section-description";

export const Properties = ({
  children,
  isInExplore,
}: {
  children?: React.ReactNode;
  isInExplore?: boolean;
}) => {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const { data, loading, refetch } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: isInExplore ? 20 : 6,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: isInExplore ? 20 : 6,
    });
  }, [params.filter, params.query]);

  return (
    <FlatList
      data={loading ? [] : data}
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
        isInExplore ? (
          <ExploreHeader propertiesCount={data?.length} />
        ) : (
          <HomeHeader featuredCards={children} />
        )
      }
    />
  );
};

export const FeaturedProperties = () => {
  const { data, loading } = useAppwrite({
    fn: getLatestProperties,
  });

  return (
    <View className="mb-5">
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
