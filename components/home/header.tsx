import { View } from "react-native";
import Filters from "../shared/filters";
import Search from "../shared/search";
import SectionDescription from "../shared/section-description";
import UserData from "./user-data";

const Header = ({ featuredCards }: { featuredCards?: React.ReactNode }) => {
  return (
    <View className="px-5">
      <UserData />

      <Search />

      {featuredCards}

      <SectionDescription title="Our Recommendation" description="See all" />
      <Filters />
    </View>
  );
};

export default Header;
