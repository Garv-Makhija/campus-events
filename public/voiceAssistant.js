const micBtn = document.getElementById('voiceBtn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("Speech Recognition not supported in this browser.");
} else {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.continuous = false;

    micBtn.addEventListener('click', () => {
        console.log("Mic clicked... starting recognition.");
        recognition.start();
    });

    recognition.onstart = () => {
        console.log("Listening...");
    };

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript.toLowerCase().trim();
        console.log("Transcript:", transcript);
        document.getElementById("transcript").innerText = "You said: " + transcript;

        handleVoiceCommand(transcript);
    };

    recognition.onerror = function (event) {
        console.error("Speech recognition error:", event.error);
        alert("Error: " + event.error);
    };

    recognition.onend = () => {
        console.log("Voice recognition ended.");
    };

    function handleVoiceCommand(command) {
        console.log("Handling voice command:", command);

        if (command.includes("event")) {
            location.assign("/events");
        } else if (command.includes("mentor")) {
            location.assign("/mentors");
        } else if (command.includes("login")) {
            location.assign("/login");
        } else {
            alert("Command not recognized. Try saying: 'show events', 'open mentors', or 'login'");
        }
    }
}
