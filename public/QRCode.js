function generateQR(url, elementId) {
  document.getElementById(elementId).innerHTML = ""; 
  new QRCode(document.getElementById(elementId), {
    text: url,
    width: 128,
    height: 128
  });
}
