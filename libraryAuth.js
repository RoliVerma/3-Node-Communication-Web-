var unsubscribe=firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;


    if(user != null){
        var email_id = user.email;
        CreateTable();
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



let CreateTable = function (){

       // CREATE DYNAMIC TABLE.
       var table = document.createElement('table');

       // SET THE TABLE ID.
       // WE WOULD NEED THE ID TO TRAVERSE AND EXTRACT DATA FROM THE TABLE.
       table.setAttribute('id', 'empTable');
       table.setAttribute('border','1');
       table.setAttribute('align','center');
       table.setAttribute('width','70%');
       table.setAttribute('cellpadding','5');
       table.setAttribute('cellspacing','3');

       var arrHead = new Array();
       arrHead = ['S.No','Name', 'Roll Number', 'Year' , 'Stream' , 'Branch' ,'Contact' , 'Hostel' ,'Library Verified'];

      var tr = table.insertRow(-1);

      for (var h = 0; h < arrHead.length; h++) {
          var th = document.createElement('th');              // TABLE HEADER.
          th.innerHTML = arrHead[h];
          tr.appendChild(th);
      }
       var today = new Date();
       var date = today.getDate();
       let db = firebase.firestore();

       var arrValue = new Array();
       let studRef = db.collection('Library');
       var rowc = 0 ;
       let allStud = studRef.get()
         .then(snapshot => {
           snapshot.forEach(doc => {
             console.log(doc.id, '=>', doc.data());
             if( date == doc.id.slice(0,2)){
               console.log(doc.id.slice(0,2));
               var studObj = doc.data();
               var libV= "No";
               if(studObj.libStatus == 1){
                 libV="Yes";
               }
               arrValue.push([rowc+1,studObj.nm ,studObj.roll, studObj.yr,studObj.strm , , studObj.phn , studObj.hostel ,libV ]);
               console.log(arrValue);
               tr = table.insertRow(-1);

               for (var j = 0; j < arrHead.length; j++) {
                   var td = document.createElement('td');          // TABLE DEFINITION.
                   td = tr.insertCell(-1);
                   td.innerHTML = arrValue[rowc][j];                  // ADD VALUES TO EACH CELL.
               }
               rowc= rowc+1;
             }
             else{
                console.log(doc.id.slice(0,2),"12334");
             }
           });
         })
         .catch(err => {
           console.log('Error getting documents', err);
         });



       document.body.appendChild(table);
     }
