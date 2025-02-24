import { FeaturedProperties, Properties } from "@/components/home/properties";
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
