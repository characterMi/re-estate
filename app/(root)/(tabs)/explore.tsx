import { Properties } from "@/components/shared/properties";
import { SafeAreaView } from "react-native-safe-area-context";

const Explore = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <Properties isInExplore />
    </SafeAreaView>
  );
};

export default Explore;
