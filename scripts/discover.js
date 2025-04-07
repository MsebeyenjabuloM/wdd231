document.addEventListener('DOMContentLoaded', () => {
    // Fetch and load cards
    fetch('data/discover.json')
      .then(response => response.json())
      .then(data => {
        const container = document.querySelector('.discover-grid');
        data.forEach(place => {
          const card = document.createElement('div');
          card.classList.add('discover-card');
  
          card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
              <img src="${place.image}" alt="${place.name}">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button>Learn More</button>
          `;
          container.appendChild(card);
        });
      });
  
    // Visit message using localStorage
    const visitMsg = document.getElementById('visit-msg');
    const today = Date.now();
    const lastVisit = localStorage.getItem('lastVisit');
  
    let message = "Welcome! Let us know if you have any questions.";
  
    if (lastVisit) {
      const diffTime = today - Number(lastVisit);
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
      if (days < 1) {
        message = "Back so soon! Awesome!";
      } else if (days === 1) {
        message = "You last visited 1 day ago.";
      } else {
        message = `You last visited ${days} days ago.`;
      }
    }
  
    visitMsg.textContent = message;
    localStorage.setItem('lastVisit', today.toString());
  });
  