import { ScrollView, View } from "react-native";

export const FeaturedCardLoader = () => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    className="h-80"
  >
    {[...Array(5)].map(() => (
      <View
        key={Math.random()}
        className="w-60 h-80 bg-black-100 animate-pulse rounded-xl mr-5"
      />
    ))}
  </ScrollView>
);

export const CardLoader = () => (
  <View className="mt-5 px-5">
    {[...Array(3)].map(() => (
      <View key={Math.random()} className="gap-4 flex-row">
        {[...Array(2)].map(() => (
          <View
            key={Math.random()}
            className="flex-1 h-64 w-full mt-4 rounded-lg bg-black-100 animate-pulse"
          />
        ))}
      </View>
    ))}
  </View>
);
