// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com/products/',
  firebase: {
    apiKey: 'AIzaSyCsAfxd_OGa8BmpnJfXizHNxpKvGmw69TQ',
    authDomain: 'angular-fb6a2.firebaseapp.com',
    databaseURL: 'https://angular-fb6a2.firebaseio.com',
    projectId: 'angular-fb6a2',
    storageBucket: 'angular-fb6a2.appspot.com',
    messagingSenderId: '14663567282',
    appId: '1:14663567282:web:9734cdd6698360d1d406ab'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
