import React, { useState, useContext} from "react";
import {StyleSheet, SafeAreaView, StatusBar, FlatList} from "react-native";
import Publication from './Publication'
import { useScrollToTop } from '@react-navigation/native';
import {AppContext} from '../app/provider'

const Main = () => {
    const ref = React.useRef(null);
    const [refreshing, setRefreshing] = React.useState(false);
    const [data, setDate] = useState();
    const [state, setState] = useContext(AppContext);
    const [page, setPage] = useState(1);

    useScrollToTop(ref);

    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => {
        setRefreshing(false);
      });
    }, []);

    const fetchMore = () => {
      setPage(page+1);
      setDate([...data, getData(page)])
    }
    
    const getData = (paramID) => {
      fetch('https://picsum.photos/v2/list?page='+paramID+'&limit=10')
      .then(result => result.json())
      .then((output) => {
          setDate(output)
      }).catch(err => console.error(err));
    } 
    getData(page)

    return (
        <SafeAreaView style={styles.container}>
          <FlatList data={data} 
            onEndReached={fetchMore} 
            refreshing={refreshing}
            onRefresh={onRefresh}
            key={(item) => item.id}
            ref={ref}
            renderItem = {({item,index}) => 
              <Publication id={item.id} blur={state.blur} grayscale={state.grayscale} liked={'heart-outline'}/>    
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