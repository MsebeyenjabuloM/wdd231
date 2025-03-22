document.addEventListener("DOMContentLoaded", () => {
    displaySpotlight();
});

// Directly copying the members array from members.js
const members = [
    {
        "name": "Asante Solutions",
        "tagline": "Innovative Digital Marketing Solutions",
        "email": "contact@asantesolutions.com",
        "phone": "031-555-1234",
        "url": "https://asantesolutions.com",
        "image": "asantesolutions.jpeg",
        "membership_level": "silver",
        "address": "56 Oakwood Drive, Durban Central"
    },

    {
        "name": "Seaside Coffee",
        "tagline": "Best Coffee in Town",
        "email": "info@seasidecoffee.com",
        "phone": "031-888-9876",
        "url": "https://seasidecoffee.com",
        "image": "seasidecoffee.jpeg",
        "membership_level": "member",
        "address": "88 Rainbow Circle, Old Mill Road, Durban"
    },
    {
        "name": "Zen Spa",
        "tagline": "Experience of Relaxation",
        "email": "contact@zenspa.com",
        "phone": "031-222-4226",
        "url": "https://zenspa.com",
        "image": "zenspa.jpeg",
        "membership_level": "gold",
        "address": "501 Peter Mokaba Road, Morningside, Durban"
    },
    {
        "name": "Elizabeth Gordon Gallery",
        "tagline": "KZN's premier commercial art gallery",
        "email": "joy@elizabethgordon.co.za",
        "phone": "031-03-8133",
        "url": "https://elizabethgordon.co.za/",
        "image": "artgallery.jpeg",
        "membership_level": "member",
        "address": "148 Montpelier Rd, Durban"
    },
    {
        "name": "Madam & Sir",
        "tagline": "Savor the Art of Fine Dining Hospitality",
        "email": "Bookings@madamandsir.co.za",
        "phone": "031-816-6670",
        "url": "https://madamandsir.co.za",
        "image": "madam&sir.jpeg",
        "membership_level": "gold",
        "address": "262 Florida Rd, Morningside, Durban, "
    },
    {
        "name": "Indoni Fashion House",
        "tagline": "",
        "email": "info@indonifashionhouse.com",
        "phone": "072-424-0161",
        "url": "https://indonifashionhouse.com/",
        "image": "fashionhouse.jpeg",
        "membership_level": "silver",
        "address": "501 Peter Mokaba Road, Morningside, Durban"
    },
    {
        "name": "Lifestyle Gym",
        "tagline": "A functional fitness & lifestyle centre in Durban North",
        "email": "join@lifestylegym.com",
        "phone": "063-870-8958",
        "url": "https://lifestylegym.co.za/",
        "image": "lifestylegym.jpeg",
        "membership_level": "member",
        "address": "181 Lothian Road, Durban North"
    }

];

function displaySpotlight() {
    const spotlightContainer = document.querySelector("#business-spotlight");

    // Filter only gold and silver members
    const spotlightMembers = members.filter(member =>
        member.membership_level === "gold" || member.membership_level === "silver" || member.membership_level === "member"
    );

    // Shuffle the array and pick up to 3 members
    const selectedMembers = getRandomMembers(spotlightMembers, 3);

    selectedMembers.forEach(member => {
        let card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML = `
        <img src="../images/${member.image}" alt="${member.name} logo">
        <div class="spotlight-info">
                <h3>${member.name}</h3>
                <p><strong>Tagline:</strong> ${member.tagline}</p>
                <p><strong>Email:</strong> ${member.email}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                <a href="${member.url}" target="_blank">Visit Website</a>
            </div>
        `;

        spotlightContainer.appendChild(card);
    });
}

function getRandomMembers(array, count) {
    let shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
