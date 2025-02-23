import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, Button, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text className="font-bold text-xl text-center">首页</Text>
      <Link
        className="w-10/12 bg-green-400 rounded-xl py-4 text-center m-auto mt-[320px]"
        href="/login"
      >
        登录
      </Link>
    </SafeAreaView>
  );
}
