// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBXWcst6bsyETCRhxg5uKcCw33MV3ZkbEg",
      authDomain: "kwitter-3aa63.firebaseapp.com",
      databaseURL: "https://kwitter-3aa63-default-rtdb.firebaseio.com",
      projectId: "kwitter-3aa63",
      storageBucket: "kwitter-3aa63.appspot.com",
      messagingSenderId: "135705862151",
      appId: "1:135705862151:web:38731e8ef0235757704aa2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
