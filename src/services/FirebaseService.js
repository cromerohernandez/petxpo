import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'petxpo-630a5.firebaseapp.com',
  databaseURL: 'https://petxpo-630a5-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'petxpo-630a5',
  storageBucket: 'petxpo-630a5.appspot.com',
  messagingSenderId: process.env.REACT_APP_API_SENDER_ID,
  appId: process.env.REACT_APP_API_APP_ID,
  //measurementId: "G-JQK6VF7KXE"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const getPets = (typeFilter) => {
  return database.ref('pets').get()
    .then(snapshot => {
      if (snapshot.exists()) {
        const pets = []

        Object.keys(snapshot.val()).forEach(key => {
          if(typeFilter.includes(snapshot.val()[key]['type'])) {
            console.log('here')
            pets.push(snapshot.val()[key])
          }
        })

        return pets
      } else {
        console.log('not data available');
      }
    })
    .catch(error => {
      console.log(error);
    })
};

const getPetLikes = (petId) => {
  return database.ref('likes').get()
    .then(snapshot => {
      let petLikes = 0;

      Object.keys(snapshot.val()).forEach(key => {
         if (snapshot.val()[key]['pet'] === petId) {
           petLikes++
         }
      })

      return petLikes
    })
    //.catch
}

const getUserLike = (userId, petId) => {
  return database.ref('likes').get()
    .then(snapshot => {
      const userLikes = []
      let userLike = null

      Object.keys(snapshot.val()).forEach(key => {
         if (snapshot.val()[key]['user'] === userId) {
           userLikes.push(snapshot.val()[key])
         }
      })

      userLikes.forEach(like => {
        if (like.pet === petId) {
          userLike = like
        }
      })

      return userLike ? userLike : false
    })
    //.catch
}

const like = (likeId, userId, petId) => {
  if (likeId) {
    database.ref('likes').child(likeId).set(null)
  } else {
    let newLikeId = Date.now()

    database.ref('likes').child(newLikeId).set({
      id: newLikeId,
      pet: petId,
      user: userId
    })
  }
}

const signIn = (data) => {
  const { email, password } = data

  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => {
    return user.user.uid
  })
  .catch(error => {
    throw error
  });
}

const signOut = () => firebase.auth().signOut()

const FirebaseService = {
  getPets,
  getPetLikes,
  getUserLike,
  like,
  signIn,
  signOut
};

export default FirebaseService