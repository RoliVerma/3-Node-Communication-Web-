var unsubscribe=firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;


    if(user != null){
        var email_id = user.email;
    }

  } else {
    // No user is signed in.
    window.location.replace('login.html');
  }
});

//LOGOUT FUNCTION
function logout(){
  firebase.auth().signOut();
  window.location.replace('login.html');

}

//ADD ROW FUNCTION
document.getElementById("addrow_btn").addEventListener("click",addRow);
function addRow(){
  db.collection("Libraries").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  });
}
