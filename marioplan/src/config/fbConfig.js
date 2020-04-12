import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDsqrCKbxtIgnYFUUijbX8bDpREMA-BiZE",
  authDomain: "nihilus-marioplan.firebaseapp.com",
  databaseURL: "https://nihilus-marioplan.firebaseio.com",
  projectId: "nihilus-marioplan",
  storageBucket: "nihilus-marioplan.appspot.com",
  messagingSenderId: "505527291524",
  appId: "1:505527291524:web:65288d09837534bbb5bcd1",
  measurementId: "G-0YQ48JRXQM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase;
