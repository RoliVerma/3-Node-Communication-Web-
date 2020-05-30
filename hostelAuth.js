var unsubscribe=firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;

    if(user != null){
        var email_id = user.email;
        CreateTable();
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

function CreateTable() {

       // CREATE DYNAMIC TABLE.
       var table = document.createElement('table');

       // TODO SET THE TABLE ID.
       // WE WOULD NEED THE ID TO TRAVERSE AND EXTRACT DATA FROM THE TABLE.
       table.setAttribute('id', 'empTable');
       table.setAttribute('border','1');
       table.setAttribute('align','center');
       table.setAttribute('width','70%');
       table.setAttribute('cellpadding','5');
       table.setAttribute('cellspacing','3');

       var arrHead = new Array();
       arrHead = ['S.No','Name', 'Roll Number', 'Year' , 'Stream' , 'Branch' ,'Contact' , 'Hostel' ,'Verification'];
       var tr = table.insertRow(-1);

       for (var h = 0; h < arrHead.length; h++) {
           var th = document.createElement('th');              // TABLE HEADER.
           th.innerHTML = arrHead[h];
           tr.appendChild(th);
       }
       var today = new Date();
       var date = today.getDate();
       let db = firebase.firestore();

      let i = 0;
       var arrValue = new Array();
       let studRef = db.collection('Library');
       let allStud = studRef.get()
         .then(snapshot => {
           snapshot.forEach(doc => {
             console.log(doc.id, '=>', doc.data());

             if( date == doc.id.slice(0,2)){
               console.log(doc.id.slice(0,2));
               i=i+1;
               arrValue.push(['1', 'Green Field', 'Accountant']);
             }
           });
         })
         .catch(err => {
           console.log('Error getting documents', err);
         });



       for (var c = 0; c <= arrValue.length - 1; c++) {
           tr = table.insertRow(-1);

           for (var j = 0; j < arrHead.length; j++) {
               var td = document.createElement('td');          // TABLE DEFINITION.
               td = tr.insertCell(-1);
               td.innerHTML = arrValue[c][j];                  // ADD VALUES TO EACH CELL.
           }
       }
       document.body.appendChild(table);
     }
