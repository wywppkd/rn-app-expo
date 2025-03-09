import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function TabLayout() {
  return (
    <MaterialTopTabs initialRouteName="follow">
      <MaterialTopTabs.Screen name="index" options={{ title: "发现" }} />
      <MaterialTopTabs.Screen name="follow" options={{ title: "关注" }} />
    </MaterialTopTabs>
  );
}

// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// const Tab = createMaterialTopTabNavigator();

// export default function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="index" />
//       <Tab.Screen name="follow" />
//     </Tab.Navigator>
//   );
// }
