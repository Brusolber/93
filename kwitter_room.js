
//AÑADE TUS ENLACES DE FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyB9AEcwe4nF_5gT1RZKSSUtCUTaCkZ2Q3k",
      authDomain: "pruebaclase-a3199.firebaseapp.com",
      projectId: "pruebaclase-a3199",
      storageBucket: "pruebaclase-a3199.appspot.com",
      messagingSenderId: "93793309282",
      appId: "1:93793309282:web:ea4a7aa8d88c433a0df73b"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
