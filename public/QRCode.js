function generateQRForEvent(eventName) {
  const baseUrl = "https://campus-events-8vt9.onrender.com/register";
  const fullUrl = `${baseUrl}?event=${encodeURIComponent(eventName)}`;
  generateQR(fullUrl, "qrCode1");
}
