// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC8JURVhr_rXC9M7UVHvIQNXOpr9HUmUlI',
	authDomain: 'vivi-346501.firebaseapp.com',
	projectId: 'vivi-346501',
	storageBucket: 'vivi-346501.appspot.com',
	messagingSenderId: '877819075749',
	appId: '1:877819075749:web:52bff4dcd9cab73b2a014c',
	measurementId: 'G-HE5E014RLV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
export { storage };
