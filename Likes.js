import db from './database'

async function addLike(idParam){
  try {
    const docRef = await addDoc(collection(db, "likes"), {
      id: {idParam}
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function removeLike(id){

}

async function getLikes(){
  const likes = []
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

module.exports = (addLike, removeLike, getLikes);