var unsubscribe=firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;

    if(user != null){
        var email_id = user.email;
      //document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
    }

  } else {
    // No user is signed in.
    window.location.replace('login.html');
  }
});
function logout(){
  firebase.auth().signOut();
  window.location.replace('login.html');

}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
