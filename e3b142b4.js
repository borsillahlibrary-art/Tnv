// Services Data
const services = [
    { icon: "🔋", title: "CAR BATTERY REPLACEMENT", desc: "Dead battery? We replace on-site" },
    { icon: "⚡", title: "BATTERY JUMP START", desc: "Quick jump start service" },
    { icon: "🚛", title: "TRUCK BATTERY SERVICE", desc: "Heavy-duty truck batteries" },
    { icon: "🏍️", title: "BIKE BATTERY HELP", desc: "Motorcycle & scooter batteries" },
    { icon: "🚐", title: "RV BATTERY REPLACEMENT", desc: "House & chassis batteries" },
    { icon: "🏭", title: "FORKLIFT BATTERIES", desc: "Industrial equipment support" },
    { icon: "🔧", title: "BRAKE ROTORS", desc: "Professional brake rotor replacement" },
    { icon: "🛑", title: "BRAKE PADS", desc: "Quality brake pad installation" },
    { icon: "⚙️", title: "ALTERNATOR SERVICE", desc: "Expert alternator repair & replacement" },
    { icon: "🔌", title: "STARTER REPAIR", desc: "Fast starter motor replacement" },
    { icon: "🛞", title: "TIRE CHANGE SERVICE", desc: "Fast flat tire replacement" },
    { icon: "⛽", title: "EMERGENCY FUEL", desc: "5KG gas delivery to you" }
];

// Car Brands Data
const brands = [
    "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW",
    "Mercedes-Benz", "Audi", "Volkswagen", "Hyundai", "Kia", "Mazda",
    "Subaru", "Lexus", "Acura", "Jeep", "Ram", "Dodge",
    "Chrysler", "GMC", "Buick", "Cadillac", "Tesla", "Volvo"
];

// Counties Data
const counties = [
    { name: "Essex County", star: true },
    "Union County",
    "Hudson County",
    "Morris County",
    "Somerset County",
    "Middlesex County",
    "Passaic County",
    "Warren County",
    "Sussex County",
    "Hunterdon County",
    "Mercer County",
    "Monmouth County",
    "Burlington County",
    "Ocean County"
];

// Battery Brands Data
const batteryBrands = [
    {
        name: "Exide",
        desc: "Trusted quality batteries with over 100 years of proven performance",
        types: ["Flooded", "AGM", "Gel Cell"]
    },
    {
        name: "DEKA",
        desc: "Premium American-made batteries known for reliability and durability",
        types: ["AGM", "Gel", "Flooded"]
    },
    {
        name: "Interstate Batteries",
        desc: "America's #1 replacement battery with proven reliability",
        types: ["Flooded", "AGM", "Marine"]
    },
    {
        name: "Xseed Batteries",
        desc: "Advanced technology from Kafila Inc. for all vehicle types",
        types: ["DIN Series", "JIS Series", "Maintenance-Free"]
    }
];

// Populate Services Grid
function populateServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = '';

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.desc}</p>
            <a href="tel:+15513714178" class="service-link">📞 CALL NOW</a>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Populate Brands Grid
function populateBrands() {
    const brandsGrid = document.getElementById('brandsGrid');
    brandsGrid.innerHTML = '';

    brands.forEach(brand => {
        const brandItem = document.createElement('div');
        brandItem.className = 'brand-item';
        brandItem.textContent = brand;
        brandsGrid.appendChild(brandItem);
    });
}

// Populate Battery Brands Grid
function populateBatteryBrands() {
    const batteryBrandsGrid = document.getElementById('batteryBrandsGrid');
    batteryBrandsGrid.innerHTML = '';

    batteryBrands.forEach(brand => {
        const brandCard = document.createElement('div');
        brandCard.className = 'battery-brand-card';
        
        const typesHTML = brand.types.map(type => `<span class="battery-type">${type}</span>`).join('');
        
        brandCard.innerHTML = `
            <h3 class="battery-brand-name">${brand.name}</h3>
            <p class="battery-brand-desc">${brand.desc}</p>
            <div class="battery-types">
                ${typesHTML}
            </div>
        `;
        batteryBrandsGrid.appendChild(brandCard);
    });
}

// Populate Counties Grid
function populateCounties() {
    const countiesGrid = document.getElementById('countiesGrid');
    countiesGrid.innerHTML = '';

    counties.forEach(county => {
        const countyItem = document.createElement('div');
        countyItem.className = 'county-item';
        
        if (typeof county === 'object' && county.star) {
            countyItem.textContent = `📍 ${county.name} ⭐`;
        } else {
            const countyName = typeof county === 'string' ? county : county.name;
            countyItem.textContent = `📍 ${countyName}`;
        }
        
        countiesGrid.appendChild(countyItem);
    });
}

// Handle Form Submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        service: document.getElementById('service').value
    };

    console.log('Form submitted:', formData);
    
    // Show success message
    alert(`Thank you, ${formData.name}! We'll contact you at ${formData.phone} shortly.`);
    
    // Reset form
    document.getElementById('contactForm').reset();
}

// Scroll to Form
function scrollToForm() {
    const contactSection = document.querySelector('.contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    populateServices();
    populateBrands();
    populateBatteryBrands();
    populateCounties();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});