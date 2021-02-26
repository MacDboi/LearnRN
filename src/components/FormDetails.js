import react from "react";
import React from "react";
import {View, StyleSheet, Text} from "react-native";

const FormDetails = props =>{
    return <View>
        <Text>{props.title}</Text>
        <Text>The score is {props.score}</Text>
        </View>
}

const styles = StyleSheet.create ({


});

export default FormDetails;