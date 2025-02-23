import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

type Props = {};

const Add = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>sd</Text>
      </View>
      <Text className="text-xl font-bold ">Add</Text>
      <TextInput
        className="border-2 border-gray-300 rounded-lg p-2 mt-2"
        placeholder="Title222"
      />
    </SafeAreaView>
  );
};

export default Add;
