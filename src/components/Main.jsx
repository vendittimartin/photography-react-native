import React, {useEffect, useState} from "react";
import {RefreshControl, StyleSheet, SafeAreaView, ScrollView, StatusBar, View, FlatList} from "react-native";
import Publication from './Publication'
import { useScrollToTop } from '@react-navigation/native';

const Main = () => {
    const ref = React.useRef(null);
    const [refreshing, setRefreshing] = React.useState(false);
    const [id, setID] = React.useState(Math.floor(Math.random() * 1040));
    const [data, setDate] = useState([1,2,3,4,5]);

    useEffect(() => {
      fetchMore();
    },[]);

    useScrollToTop(ref);

    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => {
        setRefreshing(false);
        setID(Math.floor(Math.random() * 1040));
      });
    }, []);

    const fetchMore = () => {
      setDate(prevState => [
        ...prevState,
        ...Array.from({length: 20}).map((_,i) => i + 1 + prevState.length),
      ]);
    }

    return (
        <SafeAreaView style={styles.container}>
                <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />}
                  ref={ref} ScrollView style={styles.scrollView}>
                  {
                    !refreshing?
                    (
                      <FlatList data={data} 
                        onEndReached={fetchMore} 
                        key={e=> e}
                        renderItem = {() => 
                          (<Publication id={Math.floor(Math.random() * 1040)} liked='heart-outline'/>) 
                      }/>
                    )
                    :
                    (
                      <View></View>
                    )
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
      backgroundColor: 'white',
      marginHorizontal: 0,
    }
  });

export default Main;