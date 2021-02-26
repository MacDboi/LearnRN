import react from "react";
import React from "react";
import {View, StyleSheet, Text} from "react-native";
import FormDetails from "../components/FormDetails"

const Form = () =>{
    return <View>
        <FormDetails title = 'Yes' score = {9}/>
        <FormDetails title = 'goodbye' score = {7}/>
    </View>
}

const styles = StyleSheet.create ({


});

export default Form;