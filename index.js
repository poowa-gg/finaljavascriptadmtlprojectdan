const students = [
    { firstName: "Oyetunde", lastName: "Daniel", age: 21, score: 90, courses: ["English", "Law"] },
    { firstName: "Sandra", lastName: "Grace", age: 25, score: 88, courses: ["French", "Yoruba"] },
    { firstName: "James", lastName: "Jack", age: 27, score: 80, courses: ["Chemistry", "Food Nutrition"] },
    { firstName: "Ruth", lastName: "Bright", age: 26, score: 92, courses: ["DevOps", "Biology"] },
    { firstName: "David", lastName: "Klaus", age: 30, score: 91, courses: ["Medicine", "Computer Science"] }
];

// Step 1: Create student descriptions using .map()
const studentDescriptions = students.map(({ firstName, lastName, age, score, courses }) => 
    `${firstName} ${lastName} is ${age} years old and scored ${score}. They are taking: ${courses.join(", ")}`);

console.log(studentDescriptions);

// Step 2: Log each student's details to the console using .forEach()
students.forEach(({ firstName, lastName, age, score, courses }) => {
    console.log(`${firstName} ${lastName} is ${age} years old and scored ${score}. They are taking: ${courses.join(", ")}`);
});

// Step 3: Function to generate student cards
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

// Step 4: Function for voice output
function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1.2;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

// Step 5: Event listener to start student display
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
