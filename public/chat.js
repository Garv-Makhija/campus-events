const botReplies = {
  "hello": "Hi! How can I help you today?",
  "how to register": "Go to the Register page from the navbar and fill in your details.",
  "how to login": "Use your email and password on the login page.",
  "where is the event": "The event location is visible on the map page.",
  "bye": "Goodbye! See you at the event!"
};

async function sendMessage() {
  const userMessage = document.getElementById("userMessage").value.toLowerCase();
  const reply = botReplies[userMessage] || "Sorry, I didn’t understand that. Try asking something else.";
  document.getElementById("chatReply").innerText = reply;
}
