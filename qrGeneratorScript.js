let qrcode = document.querySelector("img");
let qrBtn = document.querySelector("button");

qrBtn.addEventListener("click", generateQr);
function generateQr(){
  let size = "1000X1000";
  var qrString = Math.random().toString(36).slice(2,16) + "RVcode";
  let baseUrl = "http://api.qrserver.com/v1/create-qr-code";

  let url = `${baseUrl}?data=${qrString}&size=${size}`;

  qrcode.src = url;
}
