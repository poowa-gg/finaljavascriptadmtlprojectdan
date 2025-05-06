const students = [
    { firstName: "Oyetunde", lastName: "Daniel", age: 21, score: 90, courses: ["English", "Law"] },
    { firstName: "Sandra", lastName: "Grace", age: 25, score: 88, courses: ["French", "Yoruba"] },
    { firstName: "James", lastName: "Jack", age: 27, score: 80, courses: ["Chemistry", "Food Nutrition"] },
    { firstName: "Ruth", lastName: "Bright", age: 26, score: 92, courses: ["DevOps", "Biology"] },
    { firstName: "David", lastName: "Klaus", age: 30, score: 91, courses: ["Medicine", "Computer Science"] }
];

// Step: 1. Function to generate flipping student cards
function createStudentCards() {
    const studentCardsContainer = document.getElementById("student-cards");
    students.forEach(({ firstName, lastName, age, score, courses }) => {
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

        studentCardsContainer.appendChild(studentCard);
        speakText(`${firstName} ${lastName} is ${age} years old and scored ${score}. Courses: ${courses.join(", ")}`);
    });
}

// Step: 3. Function for voice output
function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}

// Step: 4. Event: Show students after welcome screen
document.getElementById("start-btn").addEventListener("click", function () {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("student-container").classList.remove("hidden");
    createStudentCards();
});
