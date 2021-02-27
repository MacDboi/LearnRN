import React from "react";
import { Text, StyleSheet, View} from "react-native";

const BoxScreen = () =>{
   return <View style = {styles.viewstyle}>
       <Text style = {styles.textstyle}>Hello</Text>
       <Text style = {styles.flexstyle}>Child 1</Text>
       <Text style = {styles.flexstyle}>Child 2</Text>
       <Text style = {styles.flexstyle}>Child 3</Text>
   </View>
};

const styles = StyleSheet.create({
    viewstyle:{
        borderColor:"black",
        borderWidth: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200
    },
    textstyle:{
        borderColor:"red",
        borderWidth: 1,
        margin: 20
    },
    flexstyle:{
        borderColor:"red",
        borderWidth: 3,
        top: 15,
        flex: 1
    }
});

export default BoxScreen;