import AsyncStorage from '@react-native-async-storage/async-storage';

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('Likes', jsonValue)
          } catch (e) {
            // saving error
          }
      }

const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Likes')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

function RemoveImage(idParam){
    removeValue = async () => {
        try {
          const remove = await AsyncStorage.removeItem('Likes', () => { AsyncStorage.getItem('Likes').map(item => item.id === idParam) })
        } catch(e) {
          // remove error
        }
      
        console.log('Done.')
      }
}

module.exports = {RemoveImage, storeData, getData};
