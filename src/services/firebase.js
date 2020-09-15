import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'YOUR-API-KEY',
	authDomain: 'AUTH-DOMAIN',
	databaseURL: 'DB-URL',
	projectId: 'PROJECT-ID',
	storageBucket: 'STORAGE-BUCKET',
	messagingSenderId: 'SENDER-ID',
	appId: 'APP-ID',
	measurementId: 'ANALYTICS-ID',
}

firebase.initializeApp(firebaseConfig)
export default firebase
