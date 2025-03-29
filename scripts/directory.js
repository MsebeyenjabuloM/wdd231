// scripts/directory.js

const url = 'data/members.json'; // Path to your JSON file
const membersContainer = document.querySelector('.members-container'); // Where the data will go
const gridBtn = document.querySelector('#grid-view');
const listBtn = document.querySelector('#list-view');

let members = []; // Store members globally

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        members = data.members; // Store fetched data globally
        displayMembers(members, "grid"); // Load grid view by default
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

getMembers(); // Call function on page load

// Toggle between Grid and List View
gridBtn.addEventListener("click", () => displayMembers(members, "grid"));
listBtn.addEventListener("click", () => displayMembers(members, "list"));


// Fetch data from JSON and display it
async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members, "grid");
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

// Function to display members in cards (grid) or list
function displayMembers(members, layout = "grid") {
    membersContainer.innerHTML = ""; // Clear container before adding new items
    members.forEach(member => {
        let memberElement = document.createElement("div");
        memberElement.classList.add("member-card");
        
        if (layout === "list") {
            memberElement.classList.add("list-view");
            memberElement.innerHTML = `
                <p><strong>${member.name}</strong></p>
                <p>${member.tagline}</p>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.url}" target="_blank">${member.url}</a>
            `;
        } else {
            memberElement.classList.add("grid-view");
            memberElement.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.tagline}</p>
                <a href="${member.url}" target="_blank">${member.url}</a>
            `;
        }
        
        membersContainer.appendChild(memberElement);
    });
}

// Toggle between Grid and List View
gridBtn.addEventListener("click", () => displayMembers(members, "grid"));
listBtn.addEventListener("click", () => displayMembers(members, "list"));

// Fetch and display members when page loads
getMembers();

