import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, len} from 'react-native';
import { NavigationEvents } from 'react-navigation';

const stringscreen = () => {
    const [string, stringchange] = useState('')
    return <View>
        <Text>Hello</Text>
        <TextInput
        style = {styles.input}
        autoCapitalize = 'none'
        autoCorrect = {false}
        value = {string}
        onChangeText = {(NewValue) => stringchange(NewValue)}
        />
        {string.length>=5?
        <Text>The new string is {string}</Text>:
        <Text>Password should be at least 5 characters long</Text>}
    </View>
}

const styles = StyleSheet.create({
    input:{
        margin: 1,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default stringscreen;