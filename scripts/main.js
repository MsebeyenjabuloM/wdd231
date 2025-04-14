  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });


document.addEventListener("DOMContentLoaded", () => {
  // Image Grid Hover
  const cards = document.querySelectorAll(".run-card");
  cards.forEach(card => {
    const label = document.createElement("div");
    label.className = "terrain-label";
    label.textContent = card.dataset.label;
    card.appendChild(label);
    card.addEventListener("click", () => {
      window.location.href = "join.html";
    });
  });

  
  // Random Testimonials
  const testimonials = [
    { name: "Jade", quote: "She Runs helped me find confidence in myself and community in others." },
    { name: "Emily", quote: "Every run feels like a mini adventure. I’ve made some of my best friends here." },
    { name: "Sophia", quote: "The supportive vibe and laughter keep me coming back every week." },
    { name: "Amina", quote: "Never knew running could be this fun and freeing until She Runs." },
    { name: "Lara", quote: "I’ve grown stronger physically and mentally with this group." }
  ];

  const randomTestimonials = testimonials.sort(() => 0.5 - Math.random()).slice(0, 3);
  const container = document.getElementById("testimonial-container");

  randomTestimonials.forEach(t => {
    const div = document.createElement("div");
    div.className = "testimonial";
    div.innerHTML = `<p>"${t.quote}" - <strong>${t.name}</strong></p>`;
    container.appendChild(div);
  });
});


