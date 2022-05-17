import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCExfgbcsxoo9vEIrDS8dcs959GfldUXDI",
    authDomain: "jll-catch-of-the-day-react.firebaseapp.com",
    databaseURL: "https://jll-catch-of-the-day-react-default-rtdb.firebaseio.com",
    projectId: "jll-catch-of-the-day-react",
    storageBucket: "jll-catch-of-the-day-react.appspot.com",
    messagingSenderId: "870134453896",
    appId: "1:870134453896:web:50b1848c25e80212b2713d"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;