import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerTitle: "Index" }} />
      <Tabs.Screen name="explore" options={{ headerTitle: "Explore" }} />
      <Tabs.Screen name="profile" options={{ headerTitle: "Profile" }} />
    </Tabs>
  );
};

export default TabsLayout;
