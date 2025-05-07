Processes Explaination for Understanding of the Project🐱‍🏍

Firstly, there is a welcome screen and a button description and id created which has "Enter".
Click and on it, and the treasures are unfolded.

Then, you will see the:
Student Detail Section and i call a function to generate flipping student cards and also added function for voice output.

Then, i added some creatvity and fade out animation.

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
    
    
