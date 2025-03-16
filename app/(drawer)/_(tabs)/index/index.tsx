import { getUserInfo } from "@/api/user";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function IndexScreen() {
  const fetchData = () => {
    getUserInfo()
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <View className="flex flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl color-black">发现</Text>
      <Link href={"/modal"} className="underline color-blue-600">
        打开Modal
      </Link>
      <Text onPress={fetchData}>点击加载</Text>
    </View>
  );
}
