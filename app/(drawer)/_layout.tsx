import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        // 全局禁用默认按钮
        // headerLeft: () => null,
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="_(tabs)" // 包含 Tab 导航
        options={{
          title: "首页",
        }}
      />
      <Drawer.Screen
        name="user"
        options={{ title: "个人中心", headerShown: true }}
      />
      <Drawer.Screen
        name="order"
        options={{ title: "我的订单", headerShown: true }}
      />
    </Drawer>
  );
}
