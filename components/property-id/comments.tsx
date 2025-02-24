import { Image, Text, TouchableOpacity, View } from "react-native";

import icons from "@/constants/icons";
import { Models } from "react-native-appwrite";

const Comments = ({
  rating,
  reviews,
}: {
  rating: number | undefined;
  reviews: Models.Document;
}) => (
  <View className="mt-7">
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row items-center">
        <Image source={icons.star} className="size-6" />
        <Text className="text-black-300 text-xl font-rubik-bold ml-2">
          {rating} ({reviews.length} reviews)
        </Text>
      </View>

      <TouchableOpacity>
        <Text className="text-primary-300 text-base font-rubik-bold">
          View All
        </Text>
      </TouchableOpacity>
    </View>

    <View className="mt-5">
      <Comment item={reviews[0]} />
    </View>
  </View>
);

const Comment = ({ item }: { item: Models.Document }) => (
  <View className="flex flex-col items-start">
    <View className="flex flex-row items-center">
      <Image source={{ uri: item.avatar }} className="size-14 rounded-full" />
      <Text className="text-base text-black-300 text-start font-rubik-bold ml-3">
        {item.name}
      </Text>
    </View>

    <Text className="text-black-200 text-base font-rubik mt-2">
      {item.review}
    </Text>

    <View className="flex flex-row items-center w-full justify-between mt-4">
      <View className="flex flex-row items-center">
        <Image source={icons.heart} className="size-5" tintColor={"#0061FF"} />
        <Text className="text-black-300 text-sm font-rubik-medium ml-2">
          120
        </Text>
      </View>
      <Text className="text-black-100 text-sm font-rubik">
        {new Date(item.$createdAt).toDateString()}
      </Text>
    </View>
  </View>
);

export default Comments;
