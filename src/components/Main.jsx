import React from "react";
import {RefreshControl, StyleSheet, SafeAreaView, ScrollView, StatusBar} from "react-native";
import Publication from './Publication'
import { useScrollToTop } from '@react-navigation/native';

const Main = () => {
    const ref = React.useRef(null);

    const [refreshing, setRefreshing] = React.useState(false);

    useScrollToTop(ref);

    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
                <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />}
                  ref={ref} ScrollView style={styles.scrollView}>
                <Publication id={Math.floor(Math.random() * 1050) } liked='heart-outline'/>
                <Publication id={Math.floor(Math.random() * 1050) } liked='heart-outline'/>
                <Publication id={Math.floor(Math.random() * 1050) } liked='heart-outline'/>
                <Publication id={Math.floor(Math.random() * 1050) } liked='heart-outline'/>
                <Publication id={Math.floor(Math.random() * 1050) } liked='heart-outline'/>
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
      backgroundColor: 'white',
      marginHorizontal: 0,
    }
  });

export default Main;