import React, {useState} from "react";
import {Pressable, View, Text} from "react-native";

const Settings = () => {
  const [count, setCount] = useState(1);
  return (
    <View>
      <Pressable onPress={(p) => setCount(p => p + 1)}><Text>{count}</Text></Pressable>
    </View>
  )
}

export default Settings;