Creativity Explained
function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);

    Explaination of the codes
    This function "speakText(text) changes text into speech using the browser's built in speechSynthesis API, allowing the computer to speak the given text.

    Next, a speech object is formulated
    const speech = new SpeechSynthesisUtterance(text);
    SpeechSynthesisUtterance(text); create a new speech and it contains the text that will be spoken out loud

    Lastly,
     window.speechSynthesis.speak(speech);
     makes the computer speaks and inform the browsers to read aloud the text. The browser processes the text and plays it as a speech.
    
    
