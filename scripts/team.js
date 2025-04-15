document.addEventListener("DOMContentLoaded", () => {
    const teamContainer = document.querySelector(".team-container");
  
    fetch("../data/team.json")
      .then(response => response.json())
      .then(data => {
        data.forEach(member => {
          const card = document.createElement("div");
          card.classList.add("team-card");
  
          card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h4>${member.name}</h4>
            <p><strong>${member.title}</strong></p>
            <p><strong>Running Since:</strong> ${member.experience}</p>
            <p><strong>Longest Distance:</strong> ${member.longestDistance}</p>
            <p><strong>Favorite Terrain:</strong> ${member.favoriteTerrain}</p>
          `;
  
          teamContainer.appendChild(card);
        });
      })
      .catch(error => console.error("Error loading team data:", error));
  });
  