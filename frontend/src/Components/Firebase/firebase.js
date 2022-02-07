import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
//configuration
const firebaseConfig = {
  apiKey: "AIzaSyAASLE1ppJ77lneYyGQtGixV3e_XRRlbYc",
  authDomain: "healthycare-5ffd5.firebaseapp.com",
  projectId: "healthycare-5ffd5",
  storageBucket: "healthycare-5ffd5.appspot.com",
  messagingSenderId: "586869776088",
  appId: "1:586869776088:web:d9893843318d8e38d381ad",
  measurementId: "G-Z6GC987M86",
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// export { storage, firebase as default };
