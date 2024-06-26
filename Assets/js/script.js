
const testimonials = document.getElementById('testimonials');
        let isHovered = false;
        let scrollInterval;

        const duplicateTestimonials = () => {
            const clone = testimonials.innerHTML;
            testimonials.innerHTML += clone;
        };

        testimonials.addEventListener('mouseover', () => {
            isHovered = true;
            clearInterval(scrollInterval);
        });

        testimonials.addEventListener('mouseout', () => {
            isHovered = false;
            startScrolling();
        });

        function startScrolling() {
            scrollInterval = setInterval(() => {
                if (!isHovered) {
                    testimonials.scrollLeft += 1;
                    if (testimonials.scrollLeft >= testimonials.scrollWidth / 2) {
                        testimonials.scrollLeft = 0;
                    }
                }
            }, 10);
        }

        document.addEventListener("DOMContentLoaded", function() {
            const faqQuestions = document.querySelectorAll(".faq-question");

            faqQuestions.forEach(question => {
                question.addEventListener("click", function() {
                    // Toggle visibility of the answer
                    const answer = this.nextElementSibling;
                    
                    // Hide all other answers
                    faqQuestions.forEach(q => {
                        if (q !== question) {
                            q.nextElementSibling.style.display = "none";
                        }
                    });

                    // Toggle display of clicked answer
                    if (answer.style.display === "block") {
                        answer.style.display = "none";
                    } else {
                        answer.style.display = "block";
                    }
                });
            });
        });
        duplicateTestimonials();
        startScrolling();