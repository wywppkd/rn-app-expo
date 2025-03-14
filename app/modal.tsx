import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

type Props = {};

const Modal = (props: Props) => {
  const router = useRouter();

  return (
    <View>
      <Text>Modal</Text>
      <TouchableOpacity className="mt-96">
        <Button
          title="返回"
          onPress={() => {
            router.dismiss();
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Modal;
