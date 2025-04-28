// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Rotating Testimonials (only on homepage)
const testimonialText = document.getElementById("testimonial-text");

if (testimonialText) {
    let testimonials = [
        '"This academy transformed my career!" - Alex',
        '"The courses are amazing and very helpful!" - Sam',
        '"The academy is user-friendly and wonderful" - Ruth'
    ];

    let index = 0;
    testimonialText.innerText = testimonials[index]; // Set initial testimonial

    setInterval(() => {
        index = (index + 1) % testimonials.length;
        testimonialText.innerText = testimonials[index];
    }, 3000);
}

// Course Search
function filterCourses() {
    let query = document.getElementById("searchInput").value.toLowerCase();
    let courses = document.querySelectorAll(".course");
    courses.forEach(course => {
        let name = course.dataset.name.toLowerCase();
        course.style.display = name.includes(query) ? "block" : "none";
    });
}

// Form Validation for Contact Form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Simulate successful submission
    document.getElementById("successMessage").style.display = "block";

    setTimeout(() => {
        document.getElementById("successMessage").style.display = "none"; // Correct reference
    }, 4000);

    // Optionally clear the form fields
    this.reset();
});

// Toggle FAQ answers visibility
function toggleFAQ(element) {
    const answer = element.nextElementSibling;

    // Toggle the "expanded" class to show or hide the answer
    answer.classList.toggle('expanded');
}

// Open Enrollment Form for a specific course
function openEnrollmentForm(courseName) {
    // Show the enrollment form
    document.getElementById('enrollmentForm').classList.remove('hidden');

    // Set the course name dynamically in the enrollment form
    document.getElementById('courseName').innerText = courseName;
}

// Save Enrollment - handle form submission
function saveEnrollment(event) {
    event.preventDefault();

    // Get the student name, email, and course
    const studentName = document.getElementById('studentName').value;
    const studentEmail = document.getElementById('studentEmail').value;
    const courseName = document.getElementById('courseName').innerText;

    // Log the enrollment data (can be sent to a server or database)
    console.log(`Enrolled Student: ${studentName} (${studentEmail}) for the course: ${courseName}`);

    // Show a success message to the user
    alert(`You have successfully enrolled in the ${courseName} course!`);

    // Optionally clear the form fields
    document.getElementById('studentName').value = '';
    document.getElementById('studentEmail').value = '';

    // Optionally hide the enrollment form after submission
    document.getElementById('enrollmentForm').classList.add('hidden');
}
