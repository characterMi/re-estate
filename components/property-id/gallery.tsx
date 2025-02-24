import { FlatList, Image, Text, View } from "react-native";

const Gallery = ({ gallery }: { gallery: any }) => (
  <View className="mt-7">
    <Text className="text-black-300 text-xl font-rubik-bold">Gallery</Text>
    <FlatList
      contentContainerStyle={{ paddingRight: 20 }}
      data={gallery}
      keyExtractor={(item) => item.$id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Image source={{ uri: item.image }} className="size-40 rounded-xl" />
      )}
      contentContainerClassName="flex gap-4 mt-3"
    />
  </View>
);

export default Gallery;
