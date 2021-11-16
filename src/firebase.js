import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAvakF56PBDiVDAT1K46oSf7ne6m_HRwto",
    authDomain: "coderhouseapp.firebaseapp.com",
    projectId: "coderhouseapp",
    storageBucket: "coderhouseapp.appspot.com",
    messagingSenderId: "141708921525",
    appId: "1:141708921525:web:81781963d803cd3c700cfc"
  };

  //initialize firabase app
  export const firebaseApp = initializeApp(firebaseConfig);
  export const db = getFirestore(firebaseApp);