
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDVyO8tt1wbdxIGSIdKalcpArTkrrQGzr4",
  authDomain: "test-3d770.firebaseapp.com",
  databaseURL: "https://test-3d770-default-rtdb.firebaseio.com",
  projectId: "test-3d770",
  storageBucket: "test-3d770.appspot.com",
  messagingSenderId: "371312218188",
  appId: "1:371312218188:web:f1fd1841381e284d84e4e9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;


    //End code
    });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name+"!";


function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location ="kwitter_page.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";



}

function logout()
{
    window.location = "index.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}