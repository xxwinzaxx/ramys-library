import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDS_dHz0LXseaNNbG8OJbNQ9V80GbS8cFo",
  authDomain: "ramys-library.firebaseapp.com",
  projectId: "ramys-library",
  storageBucket: "ramys-library.firebasestorage.app",
  messagingSenderId: "359734259403",
  appId: "1:359734259403:web:bd30002d030f19b819b54e",
  measurementId: "G-24JV0ZZNB0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();