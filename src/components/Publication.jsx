import React, {useState} from "react";
import {View, Image, Alert, TouchableHighlight} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const Publication = (props) => {
    
    const [like, setLike] = useState(props.liked);

    function conversor() {
        if (props.grayscale){
            return 'true'
        }
        else{
            return 'false'
        }
    }

    return (
    <View style={style.view}>
        <View style={style.viewImage}> 
            </View>
            <TouchableHighlight onPress={() => {Alert.alert(conversor())}}>
            {
                props.grayscale ?
                (
                    <Image source={{uri:'https://picsum.photos/id/'+props.id+'/200/300?grayscale'}} style={style.image}/>
                )
                :
                (
                    <Image source={{uri:'https://picsum.photos/id/'+props.id+'/200/300'}} style={style.image}/>
                )
            }
            </TouchableHighlight>

            <View style={style.viewLike}>
            <Ionicons onPress={() => {
                if (like === 'heart-outline') {
                    setLike('heart-sharp');
                } else {
                    setLike('heart-outline');
                }
            }}
                style={style.iconLike} name={like}  size={30}/>
            <Ionicons style={style.iconDownload} name='download-outline' size={30}/>
        </View>
    </View>
    );
}

const style = {
    view: {
        flex: 6.5,
        alignItems: 'center',
        margin: 20
    },
    viewImage: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        width: 410,
        height: 340,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconLike: {
        marginLeft: 300
    },
    iconDownload: {
        marginLeft: 10
    },
    viewLike: {
        flexDirection: 'row'
    }
}

export default Publication;