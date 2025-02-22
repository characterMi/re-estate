import { useGlobalContext } from "@/lib/global-provider";
import { Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  const { isLoggedIn, loading } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="h-full justify-center items-center bg-white">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  // if (!isLoggedIn) return <Redirect href={"/sign-in"} />;

  return <Slot />;
}
