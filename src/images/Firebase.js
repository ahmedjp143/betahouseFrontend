import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDP1a6U7I8scNPhXN33wi8X3yZFvtITw4s',
  authDomain: 'betahouseimg.firebaseapp.com',
  projectId: 'betahouseimg',
  storageBucket: 'betahouseimg.appspot.com',
  messagingSenderId: '450573582810',
  appId: '1:450573582810:web:3c178e955fabbf417480e3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Storage = getStorage(app);
