import { facilities as facilitiesFromConstants } from "@/constants/data";
import icons from "@/constants/icons";
import { Image, Text, View } from "react-native";

const Facilities = ({ facilities }: { facilities: any }) => (
  <View className="mt-7">
    <Text className="text-black-300 text-xl font-rubik-bold">Facilities</Text>

    <View className="flex flex-row flex-wrap items-start justify-start mt-2 gap-5">
      {facilities.map((item: string, index: number) => {
        const facility = facilitiesFromConstants.find(
          (facility) => facility.value === item
        );

        return (
          <View
            key={index}
            className="flex flex-1 flex-col items-center min-w-16 max-w-20"
          >
            <View className="size-14 bg-primary-100 rounded-full flex items-center justify-center">
              <Image
                source={facility ? facility.icon : icons.info}
                className="size-6"
              />
            </View>

            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="text-black-300 text-sm text-center font-rubik mt-1.5"
            >
              {item}
            </Text>
          </View>
        );
      })}
    </View>
  </View>
);

export default Facilities;
