import { FeaturedProperties, Properties } from "@/components/shared/properties";
import { SafeAreaView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <Properties>
        <FeaturedProperties />
      </Properties>
    </SafeAreaView>
  );
}
