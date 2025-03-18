async function fetchMembers() {
    try {
        const response = await fetch("../scripts/members.json"); 
        if (!response.ok) throw new Error("Failed to load JSON");
        const data = await response.json(); 
        displayMembers(data);
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

function displayMembers(members) {
    const businessSection = document.getElementById("business-cards");
    businessSection.innerHTML = ""; 
    console.log(members);

    members.forEach(member => {

        const card = document.createElement("div");
        card.classList.add("business-card");

        const name = document.createElement("h3");
        name.textContent = member.name;


        const tagline = document.createElement("p");
        tagline.textContent = member.tagline;


        const img = document.createElement("img");
        img.src = `../images/${member.image}`;
        img.alt = `${member.name} logo`;


        const contactInfo = document.createElement("div");
        contactInfo.innerHTML = `
            <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
            <p>Phone: ${member.phone}</p>
            <p><a href="${member.url}" target="_blank">Visit Website</a></p>
        `;


        card.appendChild(name);
        card.appendChild(tagline);
        card.appendChild(img);
        card.appendChild(contactInfo);

        businessSection.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", fetchMembers);
