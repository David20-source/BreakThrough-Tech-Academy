
// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

//Rotating Testimonials (only on homepage)
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

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Simulate successful submission
    document.getElementById("successMessage").style.display = "block";

     // Hide it after 4 seconds
     setTimeout(() => {
        document.getElementById("successMessage").style.display = "none"; // Correct reference
    }, 4000);

    // Optionally clear the form fields
    this.reset();
});
   
function toggleFAQ(element) {
    const answer = element.nextElementSibling; // Get the <p> tag under the clicked <h4>
    
    // Toggle the "expanded" class to show or hide the answer
    answer.classList.toggle('expanded');
    }

