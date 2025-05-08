Student information display assignment 

This JavaScript assignment actively shows student details on a webpage and provides voice feedback using the SpeechSynthesis API.

Welcome to the treasure house!!

1. Defining student data  using an Array of Objects
    This array contains student objects, each holding:

      firstName and lastName: The student's full name.

      age: Student's age.

      score: Academic performance score.

      courses: A list of subjects the student is enrolled in.

 2. I created a  descriptive Strings for Each Student as see in this code below
  const studentDescriptions = students.map(({ firstName, lastName, age, score, courses }) => 
    `${firstName} ${lastName} is ${age} years old and scored ${score}. They are taking: ${courses.join(", ")}`);

console.log(studentDescriptions);
Uses .map() to prompt an array of descriptive sentences for each student.

3. Logging each Student's Information with the utilization of  .forEach()
   students.forEach(({ firstName, lastName, age, score, courses }) => {
    console.log(`${firstName} ${lastName} is ${age} years old and scored ${score}. They are taking: ${courses.join(", ")}`);
});
  .forEach() restate  through the student array and prints each student's details directly to the console.

4. I call a function, which is to, generate Student Cards for display. The function is display below
   function createStudentCards() {
    const studentCardsContainer = document.getElementById("student-cards");

    if (!studentCardsContainer) {
        console.error("Error: Student cards container not found.");
        return;
    }

    const studentCards = students.map(({ firstName, lastName, age, score, courses }) => {
        const studentCard = document.createElement("div");
        studentCard.classList.add("student-card");

        studentCard.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <strong>${firstName} ${lastName}</strong><br>
                    Age: ${age}<br>
                    Score: ${score}
                </div>
                <div class="card-back">
                    Courses: ${courses.join(", ")}
                </div>
            </div>
        `;

        speakText(`${firstName} ${lastName} is ${age} years old and scored ${score}. Courses: ${courses.join(", ")}`);

        return studentCard;
    });

    studentCardsContainer.append(...studentCards);
}

5.  I called another function, which is, for the speech output. It is written below.
   function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1.2; // Adjust speed
    speech.pitch = 1;  // Adjust pitch
    window.speechSynthesis.speak(speech);
}

Lastly,  I used an Event Listener to commence Student display. The event that will take please involves displaying of the student.
This is the code below.
document.getElementById("start-btn").addEventListener("click", function () {
    const welcomeScreen = document.getElementById("welcome-screen");
    const studentContainer = document.getElementById("student-container");

    if (welcomeScreen && studentContainer) {
        welcomeScreen.style.display = "none";
        studentContainer.classList.remove("hidden");
        createStudentCards();
    } else {
        console.error("Error: Missing required elements.");
    }
});
Thanks,
I hope you understand the process and can do yours.


  


    
