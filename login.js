function initializePage () {
  // Initialize Firebase
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
              // User is signed in.
              var user = firebase.auth().currentUser;
              // window.location.replace('http://localhost/RoliLogin/firebaseWebLogin/library.html');

              if(user != null){
                var emailId = user.email;
                var typeq = emailId.slice(0,2);
                var typel = emailId.slice(0,3);
                if(typeq=="qc"){
                window.location.href ="hostel.html";
              }else if(typel=="lib") {
                window.location.href ="library.html";
              }else{
                alert("INVALID USER");
              }
      }
      else
      {
        console.log(user);

      }
    }

  });
}

document.onload = initializePage();

function login(){

  var userEmail = document.getElementById("email_id").value;
  var userPass = document.getElementById("psw_id").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
