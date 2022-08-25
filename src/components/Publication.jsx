import React, {useState} from "react";
import {View, Image, Alert} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import ImageViewer from 'react-native-image-zoom-viewer';
import {storeData, RemoveImage} from '../../Likes'

const Publication = (props) => {
    
    const [like, setLike] = useState(props.liked);

    const images = [{
        url: 'https://picsum.photos/id/'+props.id+'/410/340',
    }]

    return (
    <View style={style.view}>
        <View style={style.viewImage}> 
            </View>
            <ImageViewer 
            imageUrls={images} 
            onDoubleClick={() => {
                if (like === 'heart-outline') {
                    setLike('heart-sharp');
                    storeData({id: props.id});
                } else {
                    setLike('heart-outline');
                    RemoveImage(props.id);
                }
            }}
            enableImageZoom={false}
            failImageSource={'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'}
            style={style.image}
            /> 

            <View style={style.viewLike}>
            <Ionicons onPress={() => {
                if (like === 'heart-outline') {
                    setLike('heart-sharp');
                    storeData({id: props.id});
                } else {
                    setLike('heart-outline');
                    RemoveImage(props.id);
                }}}
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