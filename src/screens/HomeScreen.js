import React from "react";
import { Text, StyleSheet,TouchableOpacity, View } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>HelloHam</Text>
    <TouchableOpacity onPress={()=> navigation.navigate("News")}>
      <Text>NewsScreen</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("FormPage")}>
      <Text>Form</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("counter")}>
      <Text>counter</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("string")}>
      <Text>stringMatching</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("Box")}>
      <Text>Box</Text></TouchableOpacity>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
