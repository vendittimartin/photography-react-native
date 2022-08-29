import React from "react";
import {RefreshControl, StyleSheet, SafeAreaView, ScrollView, Alert, Text, StatusBar} from "react-native";
import Publication from './Publication'

const LikeScreen = () => {
  
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView ScrollView style={styles.scrollView}
            refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />}>
              {
                <Text> ID: </Text>
              }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 7,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: '#F5FCFF',
      marginHorizontal: 0,
    }
  });

export default LikeScreen;