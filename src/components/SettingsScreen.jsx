import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Main = () => {
  
    return (
        <View style={styles.container}>
            <Text> Proximamente </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    }
  });

export default Main;