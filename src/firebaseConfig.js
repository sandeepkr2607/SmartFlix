// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyB4qidnE5BnH68JpQVlwcQIZLXlfyW6-7Q',
  authDomain: 'smartflix-8da1b.firebaseapp.com',
  projectId: 'smartflix-8da1b',
  storageBucket: 'smartflix-8da1b.firebasestorage.app',
  messagingSenderId: '605353638799',
  appId: '1:605353638799:web:984becf62eb6a58f1fa9fa',
  measurementId: 'G-JMXZGYVX0V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth
export const auth = getAuth(app);
