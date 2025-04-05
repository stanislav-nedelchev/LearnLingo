import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA2yUq2Zlh4ZrLwnU4MloyfdzumsUNByEs',
  authDomain: 'learnlingo-1746d.firebaseapp.com',
  projectId: 'learnlingo-1746d',
  storageBucket: 'learnlingo-1746d.firebasestorage.app',
  messagingSenderId: '423034189097',
  appId: '1:423034189097:web:ebf8fc0996fa35a0f87338',
  databaseURL:
    'https://learnlingo-1746d-default-rtdb.europe-west1.firebasedatabase.app/',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const dbRef = ref(db);
