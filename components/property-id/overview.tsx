import { Text, View } from "react-native";

const Overview = ({ description }: { description: string | undefined }) => (
  <View className="mt-7">
    <Text className="text-black-300 text-xl font-rubik-bold">Overview</Text>
    <Text className="text-black-200 text-base font-rubik mt-2">
      {description}
    </Text>
  </View>
);

export default Overview;
