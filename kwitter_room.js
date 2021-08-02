var firebaseConfig = {
      apiKey: "AIzaSyD7ugNhqQ8IThdjvwRZWRCx6KK9w-HDUAE",
      authDomain: "kwitter-fee17.firebaseapp.com",
      databaseURL: "https://kwitter-fee17-default-rtdb.firebaseio.com",
      projectId: "kwitter-fee17",
      storageBucket: "kwitter-fee17.appspot.com",
      messagingSenderId: "284433634683",
      appId: "1:284433634683:web:04de9a8546381f2de119de"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomname-" + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML  += row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}