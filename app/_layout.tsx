import { Stack } from "expo-router";

import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerTitle: "Tabs" }} />
      <Stack.Screen
        name="properties/[id]"
        options={{ headerTitle: "Property id", animation: "slide_from_right" }}
      />
    </Stack>
  );
}
