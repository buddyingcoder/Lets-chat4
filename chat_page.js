//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name")
    user_name = localStorage.getItem("user_name")
    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0  
      });
      
      document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(message_data);
name = message_data['name'];
message = message_data['message']
like = message_data['like']
row = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4><h4<h4 class='message_h4'>"+message +"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"'onclick='updateLike(this.id)'><span class='glyphicon-thumbs-up'>Like:>"+like +"</span></button><hr>";
document.getElementById("output").innerHTML += row;
//End code
    } 
    });
      });
       }
getData();
function updateLike(message_id)
{
button_id = message_id;
likes = document.getElementById(button_id).value;
likes_in_number = Number(likes) + 1;
console.log(likes_in_number);

 firebase.database().ref(room_name).child(message_id).update({
  like  : likes_in_number
 })
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("roon_name");
window.location = "index.html"
}