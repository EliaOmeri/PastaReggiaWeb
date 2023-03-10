// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase




export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCT77NxH_5-27tIHFUReLWl0gjK6xefjao",
        authDomain: "pastareggia-dbb01.firebaseapp.com",
        databaseURL: "https://pastareggia-dbb01-default-rtdb.firebaseio.com",
        projectId: "pastareggia-dbb01",
        storageBucket: "pastareggia-dbb01.appspot.com",
        messagingSenderId: "712037514838",
        appId: "1:712037514838:web:17e297131fabee18c605f7",
        measurementId: "G-86DZV62Q5T"
    }
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.