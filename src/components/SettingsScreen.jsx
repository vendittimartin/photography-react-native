import React, {useContext, useState} from "react";
import { View, Text, StyleSheet, Switch, TextInput, Button, Keyboard, Alert, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import {AppContext} from '../app/provider';

const Settings = () => {
    
    const [state, setState] = useContext(AppContext);
    const [blur, setBlur] = useState(false);
    const [input, setInput] = useState(1);

    const verifyBlurLevel = () => {
        if (input === 0) {
            setBlur(false);
        } 
        else{
            if (input>0 && input<10) {
                setState({...state, blur: input});
            }
            else {
                Alert.alert('The input is not in the range of allowed values')
                setInput(0);
                setBlur(false);
            }
        }
    }

    const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        const value = e.nativeEvent.text;
        setInput(value);
      }
    
    const toggleSwitch = () => {
        if (state.grayscale){
            setState({...state, grayscale: false});
        }
        else{
            setState({...state, grayscale: true});
        }
    }

    const changeBlur = () => {
        if (blur) {
            setState({...state, blur: 0});
            setBlur(!blur)
        }
        else{
            setBlur(!blur)
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
            <Text style={styles.text}>Blur</Text>
            <Switch ios_backgroundColor="#3e3e3e"
            onValueChange={changeBlur}
            value={blur}
            style={styles.switch}
            />
            {
                blur ?
                (
                    <View style={styles.viewBlur}>
                        <TextInput
                        style={styles.input}
                        placeholder="1-9"
                        keyboardType="numeric"
                        defaultValue={1}
                        autoFocus={true}
                        maxLength={1}
                        onPressOut={verifyBlurLevel}
                        onChange={(onChange)}
                        />
                        <Button title="Submit" onPress={() => {
                            verifyBlurLevel();
                            Keyboard.dismiss()
                        }}
                        />
                    </View>
                )
                :
                (
                    <View style={styles.viewBlur}>
                    </View>
                )
            }
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
    viewBlur: {
        flex:0.3,
        justifyContent: "center",
        alignItems: "center",
    },  
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        margin: 10
      },
    text : {
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        margin: 10,
        padding: 0
    },
    switch : {
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]
    }
  });

export default Settings;