var firebaseConfig = {
    apiKey: "AIzaSyAF3HC-VOV9irgyGsXjLhtCbuoPJOiomXA",
    authDomain: "kwitter-84a2e.firebaseapp.com",
    databaseURL: "https://kwitter-84a2e-default-rtdb.firebaseio.com",
    projectId: "kwitter-84a2e",
    storageBucket: "kwitter-84a2e.appspot.com",
    messagingSenderId: "58334729982",
    appId: "1:58334729982:web:a1c2e67ccb988d023b37af"
  };
  
  // Initialize Firebase
  firebas.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Rom Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id' >#"+ Room_names
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

 function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";

}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
