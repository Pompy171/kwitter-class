
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAVgYLDoWmICs8x-3hxxI9beoqvZwBdRLo",
      authDomain: "kwiterr-a0fd8.firebaseapp.com",
      databaseURL: "https://kwiterr-a0fd8-default-rtdb.firebaseio.com",
      projectId: "kwiterr-a0fd8",
      storageBucket: "kwiterr-a0fd8.appspot.com",
      messagingSenderId: "416559538167",
      appId: "1:416559538167:web:4625f8aecd2869179ad8f2"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user-name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose: "adding room" });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  console.log("Room Name-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirecttoroomname(this.id)' >#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;


                  //End code
            });
      });   
}
getData();

function redirecttoroomname(room_name) {
      console.log(room_name);
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}
function logout() {
      localStorage.removeItem("user-name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}