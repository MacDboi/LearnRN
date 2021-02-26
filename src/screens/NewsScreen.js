import React from "react";
import { Text, StyleSheet, View, FlatList} from "react-native";

const NewsScreen = () =>{
    const L = [{Name : 'Friend1',
            Age: 25},
            {Name : 'Friend2',
                Age: 30}]
    //const name = 'Jun Hao';
    /*return (
        <View>
        <Text style = {styles.textstyle}>Getting started with React Native!</Text>
        <Text style = {styles.Atext}>My name is {name}</Text>
        </View>
    );*/
    return (<FlatList 
        keyExtractor ={friend=>friend.Name}
        data = {L}
        renderItem = {({item}) =>{
            return <Text>{item.Name} - Age {item.Age}</Text>
        }}
    />);
};

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 45
    },
    Atext:{
        fontSize: 20
    }
});

export default NewsScreen;