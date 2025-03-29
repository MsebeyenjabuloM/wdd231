const url = '../data/members.json'; 
const membersContainer = document.querySelector('.members-container');
const gridBtn = document.querySelector('#grid-view');
const listBtn = document.querySelector('#list-view');

let members = []; // Store members globally

// Fetch data from JSON and display it
async function getMembers() {
    try {
        console.log("Fetching members...");
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched Data:", data); 
        members = data.members; // Store data globally
        displayMembers(members, "grid");
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

// Function to display members
function displayMembers(members, layout = "grid") {
    membersContainer.innerHTML = ""; // Clear container

    if (layout === "grid") {
        membersContainer.classList.add("grid-layout");
        membersContainer.classList.remove("list-layout");
    } else {
        membersContainer.classList.add("list-layout");
        membersContainer.classList.remove("grid-layout");
    }

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
                <a href="${member.url}" target="_blank">
    ${member.url.length > 20 ? member.url.substring(0, 17) + "..." : member.url}
</a>

            `;
        }

        membersContainer.appendChild(memberElement);
    });
}

gridBtn.addEventListener("click", () => {
    console.log("Grid button clicked");  
    displayMembers(members, "grid");
});

listBtn.addEventListener("click", () => {
    console.log("List button clicked");  
    displayMembers(members, "list");
});


// Fetch members when page loads
document.addEventListener("DOMContentLoaded", getMembers);
