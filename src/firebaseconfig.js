// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtVeOUATXtSAZT3YMhJoeJ3aZIevVruDo',
  authDomain: 'fir-auth2-774fc.firebaseapp.com',
  projectId: 'fir-auth2-774fc',
  storageBucket: 'fir-auth2-774fc.appspot.com',
  messagingSenderId: '915892834470',
  appId: '1:915892834470:web:106ab8bf11a787ce43e467'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const $db = getFirestore(app)
export { app, $db }
