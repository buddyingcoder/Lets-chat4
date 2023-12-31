//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCTd62H_aiVs9NyRJSJI3ESAQtVfkO0UG4",
      authDomain: "lets-talk-5fac8.firebaseapp.com",
      databaseURL: "https://lets-talk-5fac8-default-rtdb.firebaseio.com",
      projectId: "lets-talk-5fac8",
      storageBucket: "lets-talk-5fac8.appspot.com",
      messagingSenderId: "582742026154",
      appId: "1:582742026154:web:b71e9d7ad873fd1da7edd3",
      measurementId: "G-FFFEBZYJKE"
    };
      firebase.initializeApp(firebaseConfig)
      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!!!";
    // Initialize Firebase
    function addroom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
      })
       localStorage.setItem("room_name",room_name);
       window.location ="chat_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name" + Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function Logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("roon_name");
  window.location = "index.html"
}

 function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="chat_page.html"
 }