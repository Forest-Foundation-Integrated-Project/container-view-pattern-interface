import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyB8dctLarP281xt27QObUblrXowsXZFoaM',
    authDomain: 'apps-project-base-611505879721.firebaseapp.com',
    databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'apps-project-base',
    storageBucket: 'your-project-id-1234.appspot.com',
    messagingSenderId: '12345-insert-yourse',
    appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };