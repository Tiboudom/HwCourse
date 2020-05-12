import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBxU47ltNUZEuh2gbaM3NMxGEN6AKyXvXY",
    authDomain: "hwcourse-79aab.firebaseapp.com",
    databaseURL: "https://hwcourse-79aab.firebaseio.com",
    projectId: "hwcourse-79aab",
    storageBucket: "hwcourse-79aab.appspot.com",
    messagingSenderId: "1080726494511",
    appId: "1:1080726494511:web:4794f555df40e860ac95da"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
