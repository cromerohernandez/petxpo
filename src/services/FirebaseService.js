import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "petxpo-630a5.firebaseapp.com",
  databaseURL: "https://petxpo-630a5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "petxpo-630a5",
  storageBucket: "petxpo-630a5.appspot.com",
  messagingSenderId: process.env.REACT_APP_API_SENDER_ID,
  appId: process.env.REACT_APP_API_APP_ID,
  //measurementId: "G-JQK6VF7KXE"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const getPets = () => {
  return database.ref().child('pets').get()
    .then(snapshot => {
      if (snapshot.exists()) {
        const pets = []

        Object.keys(snapshot.val()).forEach(key => {
          pets.push(snapshot.val()[key])
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

const FirebaseService = {
  getPets
};

export default FirebaseService