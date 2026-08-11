



console.log("script.js is connected");
const toggleBtn = document.getElementById("toggleServices");
const servicesContent = document.getElementById("servicesContent");


toggleBtn.addEventListener("click", () => {

    servicesContent.classList.toggle("show");

    if (servicesContent.classList.contains("show")) {
        toggleBtn.innerText = "Hide Our Services ▲";
    } else {
        toggleBtn.innerText = "Explore Our Services ▼";
    }

});
const projects = [
    { btn: "project1Btn", modal: "project1Modal" },
    { btn: "project2Btn", modal: "project2Modal" },
    { btn: "project3Btn", modal: "project3Modal" }
];

projects.forEach(project => {

    const button = document.getElementById(project.btn);
    const modal = document.getElementById(project.modal);
    const close = modal.querySelector(".close-modal");

    button.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    close.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});
const mainImage = document.getElementById("mainImage");

const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb)=>{

    thumb.addEventListener("click",()=>{

        mainImage.src = thumb.src;

        thumbs.forEach(t=>t.classList.remove("active"));

        thumb.classList.add("active");

    });

});
const propertyModal = document.getElementById("propertyModal");
const closeProperty = document.querySelector(".close-property");

document.querySelectorAll(".view-property").forEach(button => {

    button.addEventListener("click", () => {

        const property = listings[button.dataset.id];

        currentImages = property.images;
        currentImageIndex = 0;

        showCurrentImage();
        const thumbnailGallery = document.getElementById("thumbnailGallery");

        thumbnailGallery.innerHTML = "";

        property.images.forEach((image, index) => {

            thumbnailGallery.innerHTML += `
               <img src="${image}" class="gallery-thumb" data-index="${index}">
            `;

        });
        document.querySelectorAll(".gallery-thumb").forEach((thumb) => {

            thumb.addEventListener("click", () => {

                 document.getElementById("modalImage").src = thumb.src;

            });

        });
        document.getElementById("modalTitle").textContent = property.title;
        document.getElementById("modalDescription").textContent = property.description;
        document.getElementById("mapButton").href = property.map;

        propertyModal.style.display = "block";

    });

});

closeProperty.addEventListener("click", () => {
    propertyModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === propertyModal) {
        propertyModal.style.display = "none";
    }
});
function bookInspection() {
    document.getElementById("inspectionForm").style.display = "block";
}
document.getElementById("bookInspectionBtn").addEventListener("click", function () {

    const name = document.getElementById("clientName").value;
    const phone = document.getElementById("clientPhone").value;
    const email = document.getElementById("clientEmail").value;
    const date = document.getElementById("inspectionDate").value;
    const time = document.getElementById("inspectionTime").value;
    const message = document.getElementById("clientMessage").value;

    const property = document.getElementById("modalTitle").textContent;

    const bookInspectionBtn = document.getElementById("bookInspectionBtn");

bookInspectionBtn.addEventListener("click", function () {

    const name = document.getElementById("clientName").value.trim();
    const phone = document.getElementById("clientPhone").value.trim();
    const email = document.getElementById("clientEmail").value.trim();
    const date = document.getElementById("inspectionDate").value;
    const time = document.getElementById("inspectionTime").value;
    const message = document.getElementById("clientMessage").value.trim();

    if (!name || !phone || !date || !time) {
        alert("Please fill in all required fields.");
        return;
    }

    const property = document.getElementById("modalTitle").textContent;

    const whatsappMessage = `Hello KELEGS Prime Estate,

I'd like to schedule a property inspection.

🏡 Property:
${property}

👤 Name:
${name}

📞 Phone:
${phone}

📧 Email:
${email}

📅 Preferred Date:
${date}

🕒 Preferred Time:
${time}

💬 Message:
${message}`;

    window.open(
        `https://wa.me/2349031468437?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
    );

});
});
// ===============================
// Property Search
// ===============================

const searchBox = document.getElementById("listingSearch");
const noResults = document.getElementById("noResults");

searchBox.addEventListener("keyup", function () {

    const keyword = this.value.trim().toLowerCase();

    const cards = document.querySelectorAll(".property-card");
    let found = false;

    cards.forEach(card => {

        const title = card.dataset.title;
        const location = card.dataset.location;
        const type = card.dataset.type;

       if (
    title.includes(keyword) ||
    location.includes(keyword) ||
    type.includes(keyword)
) {
    card.style.display = "";
    found = true;
} else {
    card.style.display = "none";
}
    });
    if (found) {
    noResults.style.display = "none";
} else {
    noResults.style.display = "block";
}

});
const clearSearchBtn = document.getElementById("clearSearchBtn");

clearSearchBtn.addEventListener("click", () => {

    searchBox.value = "";

    document.querySelectorAll(".property-card").forEach(card => {
        card.style.display = "";
    });

    document.querySelector(".tab.active").click();

    noResults.style.display = "none";

});
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const filter = tab.dataset.filter.toLowerCase();

        document.querySelectorAll(".property-card").forEach(card => {

            const tag = card.querySelector(".property-tag").textContent.toLowerCase();

            if (filter === "all" || tag === filter) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});
document.getElementById("quoteForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("quoteName").value;
    const phone = document.getElementById("quotePhone").value;
    const email = document.getElementById("quoteEmail").value;
    const service = document.getElementById("quoteService").value;
    const message = document.getElementById("quoteMessage").value;

    const text = `Hello KELEGS Prime Estate,

I would like to request a quote.

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Project Details:
${message}`;

    window.open(
        "https://wa.me/2349031468437?text=" + encodeURIComponent(text),
        "_blank"
    );
});
const serviceModal = document.getElementById("serviceModal");
const closeServiceModal = document.getElementById("closeServiceModal");

const serviceModalTitle = document.getElementById("serviceModalTitle");
const serviceModalDescription = document.getElementById("serviceModalDescription");
const serviceModalImage = document.getElementById("serviceModalImage");
const serviceModalList = document.getElementById("serviceModalList");
const serviceWhatsApp = document.getElementById("serviceWhatsApp");

const services = {
    "property-sales": {
        title: "Property Sales",
        image: "images/luxury-duplex.jpg",
        description:"We provide clients with quality residential and commercial properties that match their taste. ",
        features: [
            "Property sales",
            "Property rentals",
            "Residential properties",
            "Commercial properties",
        ]
    },

    "construction": {
        title: "Construction",
        image: "images/luxury-duplex.jpg",
        description: "We provide professional construction services for residential and commercial projects, from planning through completion.",
        features: [
            "Residential construction",
            "Commercial construction",
            "Building projects",
            "Project supervision",
            "Quality finishing"
        ]
    },
    "renovation": {
        title: "Renovation",
        image: "images/interior-design.jpg",
        description: "Transform your existing property with our renovation and remodeling services.",
        features: [
            "Home remodeling",
            "Interior renovation",
            "Exterior renovation",
            "Kitchen upgrades",
            "Bathroom upgrades"
        ]
    },

    "swimming-pool": {
        title: "Swimming pool",
        image: "images/swimming-pool.jpg",
        description: "We design ad construct beautiful swimming pools for residential and commercial properties.",
        features: [
            "Pool design",
            "Pool construction",
            "Pool finishing",
            "Pool landscaping",
            "Pool maintenance"
        ]
    },

    "property-management": {
        title: "Property management",
        image: "images/interior-design.jpg",
        description: "We offer professional management of residential and commercial properties",
        features: [
            "Residential property management",
            "Commercial property management"
        ]
    }
};
// OPEN MODAL
document.querySelectorAll(".learn-more").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const serviceName = this.dataset.service;
        const service = services[serviceName];

        if (!service) return;

        serviceModalTitle.textContent = service.title;
        serviceModalDescription.textContent = service.description;
        serviceModalImage.src = service.image;

        serviceModalList.innerHTML = "";

        service.features.forEach(feature => {
            const li = document.createElement("li");
            li.textContent = feature;
            serviceModalList.appendChild(li);
        });

        serviceModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

//CLOSE MODAL
closeServiceModal.addEventListener("click", function() {
    serviceModal.classList.remove("active");
    document.body.style.overflow = "";
});

// CLOSE WHEN CLICKING OUTSIDE
serviceModal.addEventListener("click", function(event) {
    if (event.target === serviceModal) {
        serviceModal.classList.remove("active");
        document.body.style.overflow = "";
    }
});