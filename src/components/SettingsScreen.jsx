import React, {useContext, useState} from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import {AppContext} from '../app/provider';

const Settings = () => {
    
    const [state, setState] = useContext(AppContext);
    
    const toggleSwitch = () => {
        if (state.grayscale){
            setState({...state, grayscale: false});
        }
        else{
            setState({...state, grayscale: true});
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Grayscale</Text>
            <Switch 
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={state.grayscale}
            style={styles.switch}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    text : {
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        margin: 10,
        padding: 10
    },
    switch : {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]
    }
  });

export default Settings;