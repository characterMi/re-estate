import { useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

import AgentDetails from "@/components/property-id/agent-details";
import BookNow from "@/components/property-id/book-now";
import Comments from "@/components/property-id/comments";
import Facilities from "@/components/property-id/facilities";
import Gallery from "@/components/property-id/gallery";
import Header from "@/components/property-id/header";
import Location from "@/components/property-id/location";
import Overview from "@/components/property-id/overview";
import PropertyDetail from "@/components/property-id/property-detail";
import { useAppwrite } from "@/hooks/useAppwrite";
import { getPropertyById } from "@/lib/appwrite";

const Property = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();

  const { data: property, loading } = useAppwrite({
    fn: getPropertyById,
    params: {
      id: id!,
    },
  });

  if (loading)
    return (
      <SafeAreaView className="h-full justify-center items-center bg-white">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 bg-white"
      >
        <Header propertyImage={property?.image} />

        <View className="px-5 mt-7 flex gap-2">
          <PropertyDetail property={property} />

          <AgentDetails agent={property?.agent} />

          <Overview description={property?.description} />

          {property?.facilities.length > 0 && (
            <Facilities facilities={property?.facilities} />
          )}

          {property?.gallery.length > 0 && (
            <Gallery gallery={property?.gallery} />
          )}

          <Location address={property?.address} />

          {property?.reviews.length > 0 && (
            <Comments rating={property?.rating} reviews={property?.reviews} />
          )}
        </View>
      </ScrollView>

      <BookNow price={property?.price} />
    </View>
  );
};

export default Property;
