import React, {useReducer} from "react";
import {View, StyleSheet, Text, Button} from "react-native";


const reducer = (state,action) => {
    switch(action.type)
    {
        case 'increase':
            return {counter: state.counter+action.payload} 
        case 'decrease':
            return {counter: state.counter-action.payload}
        default:
            return state
    }
        


}

const counterscreen = () =>{
    const [state,dispatch] = useReducer(reducer,{counter:0})
    //const [counter,setcount] = useState(0);
    return <View>
        <Button
        title = 'increase'
        onPress = {() => dispatch({type : 'increase', payload : 1})}
        //{() => {setcount(counter+1);}}
        />
        <Button
        title = 'decrease'
        onPress = {() => dispatch({type : 'increase', payload : -1})}
            //{setcount(counter-1);}
        />
        <Text>Current Count = {state.counter}</Text>
    </View>
}

const styles = StyleSheet.create ({


});

export default counterscreen;