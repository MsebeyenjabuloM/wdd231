async function loadLocations() {
    try {
      const response = await fetch("../data/runLocations.json");
      const data = await response.json();
      const container = document.getElementById("locationsContainer");
  
      data.forEach(loc => {
        const card = document.createElement("div");
        card.classList.add("run-card");
        card.innerHTML = `
          <div class="card-front">
            <img src="${loc.image}" alt="${loc.type}" />
            <h3>${loc.type}</h3>
          </div>
          <div class="card-back">
            <h4>${loc.location}</h4>
            <p><strong>Time:</strong> ${loc.time}</p>
            <p><strong>Leader:</strong> ${loc.leader}</p>
            <p>${loc.details}</p>
          </div>
        `;
        container.appendChild(card);
      });
    } catch (err) {
      console.error("Error loading run data:", err);
    }
  }
  
  loadLocations();
  
  // FORM HANDLING
  const form = document.getElementById("joinForm");
  const thankYou = document.getElementById("thankYouMessage");
  
  form.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("firstName");
    localStorage.setItem("runnerName", name);
  
    form.classList.add("hidden");
    thankYou.classList.remove("hidden");
    thankYou.innerHTML = `
      <h3>Thanks for joining, ${name}!</h3>
      <p>We’ll be in touch shortly to finalize everything. Can’t wait to run with you!</p>
    `;
  });
  