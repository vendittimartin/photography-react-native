import React, {useEffect, useState, useContext} from "react";
import {RefreshControl, StyleSheet, SafeAreaView, ScrollView, StatusBar, View, FlatList} from "react-native";
import Publication from './Publication'
import { useScrollToTop } from '@react-navigation/native';
import {AppContext} from '../app/provider'

const Main = () => {
    const ref = React.useRef(null);
    const [refreshing, setRefreshing] = React.useState(false);
    const [id, setID] = React.useState(Math.floor(Math.random() * 1040));
    const [data, setDate] = useState([1,2,3,4,5]);
    const [state, setState] = useContext(AppContext);

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
        ...Array.from({length: 5}).map((_,i) => i + 1 + prevState.length),
      ]);
    }  
    
    return (
        <SafeAreaView style={styles.container}>
          <FlatList data={data} 
            //onEndReached={fetchMore} 
            refreshing={refreshing}
            onRefresh={onRefresh}
            key={e=> e}
            ref={ref}
            renderItem = {() => 
              <Publication  id={Math.floor(Math.random() * 1040)} grayscale={state.grayscale} liked='heart-outline'/>    
          }/>       
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