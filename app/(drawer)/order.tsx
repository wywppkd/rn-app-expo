import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {};

const OrderScreen = (props: Props) => {
  return (
    <View>
      <Text>OrderScreen</Text>
      <Link href={"/modal"} className="underline color-blue-600">
        打开Modal
      </Link>
    </View>
  );
};

export default OrderScreen;
