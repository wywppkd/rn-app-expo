import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native";
import { DrawerActions } from "@react-navigation/native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ navigation }) => ({
        tabBarActiveTintColor: "#e91e63",
        // 默认隐藏所有Tab页面的header
        headerShown: false,
      })}
    >
      <Tabs.Screen
        name="index"
        options={({ navigation }) => ({
          title: "首页",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
          // 单独启用header并添加按钮
          headerShown: true,
          headerLeft: ({ tintColor }) => (
            <Button
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer);
              }}
              title="="
            />
          ),
        })}
      />
      <Tabs.Screen
        name="hot"
        options={{
          title: "热门",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="whatshot" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={({ navigation }) => ({
          title: "消息",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="message" size={24} color={color} />
          ),
          // 单独启用header并添加按钮
          headerShown: true,
        })}
      />
      <Tabs.Screen
        name="my"
        options={({ navigation }) => ({
          title: "我的",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="123" size={24} color={color} />
          ),
          // 单独启用header并添加按钮
          headerShown: true,
          headerLeft: ({ tintColor }) => (
            <Button
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer);
              }}
              title="="
            />
          ),
        })}
      />
    </Tabs>
  );
}
