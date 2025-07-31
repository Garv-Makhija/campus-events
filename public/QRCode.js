function generateQRForEvent(eventName, elementId) {
  const baseUrl = "https://campus-events-8vt9.onrender.com/register";
  const fullUrl = `${baseUrl}?event=${encodeURIComponent(eventName)}`;
  generateQR(fullUrl, elementId);
}

function generateQR(url, elementId) {
  const container = document.getElementById(elementId);
  container.innerHTML = ""; // Clear previous QR
  new QRCode(container, {
    text: url,
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}
