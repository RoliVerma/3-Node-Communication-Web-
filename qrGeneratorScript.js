let qrcode = document.querySelector("img");
let qrBtn = document.querySelector("button");

qrBtn.addEventListener("click", generateQr);
function generateQr(){
  let size = "1000X1000";
  var qrString = Math.random().toString(36).slice(2,16) + "RVcode";
  let baseUrl = "http://api.qrserver.com/v1/create-qr-code";

  let url = `${baseUrl}?data=${qrString}&size=${size}`;

  qrcode.src = url;

  let db = firebase.firestore();
  let data = {
  qr: qrString
  };
//CROPPING OUT THE USERNAME FOR DOCUMENT NAME

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
            // User is signed in.
            var user = firebase.auth().currentUser;
            if(user != null){
              let docName = user.email.slice(0,5);
              let setDoc = db.collection('QrCodes').doc(docName).set(data);
            }else{
              window.location.href ="library.html";
            }
    }
    else
    {
      console.log(user);
    }
});
}
