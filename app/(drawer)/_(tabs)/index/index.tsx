import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function IndexScreen() {
  return (
    <View className="flex flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl color-black">发现</Text>
      <Link href={"/modal"} className="underline color-blue-600">
        打开Modal
      </Link>
    </View>
  );
}
