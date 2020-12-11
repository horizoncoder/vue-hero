import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAfIALgTCkDnVQi3IhUmt5MLP4H1GVqpS4",
  databaseURL: "first-33f46.firebaseapp.com",
  projectId: "first-33f46"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
