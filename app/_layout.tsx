import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

import { useEffect } from "react";
import "./global.css";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(root)/(tabs)" options={{ headerTitle: "Tabs" }} />
      <Stack.Screen
        name="(root)/properties/[id]"
        options={{ headerTitle: "Property id", animation: "slide_from_right" }}
      />
    </Stack>
  );
}
