import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function UserScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>个人中心</Text>
      <Link href="/order" style={{ marginTop: 20 }}>
        查看我的订单
      </Link>
    </View>
  );
}
