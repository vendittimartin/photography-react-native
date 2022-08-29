import React, {useState} from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const Settings = () => {
    
    const [grayscale, setGrayscale] = useState(false);
    
    const toggleSwitch = () => setGrayscale(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Grayscale</Text>
            <Switch 
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={grayscale}
            style={styles.switch}
            >
            </Switch>
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