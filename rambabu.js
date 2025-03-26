// Material List (unchanged)
const materialData = {
    "Steel": {
        su: [421, 424, 386, 448, 441, 395, 503, 483, 450, 552],
        sy: [314, 324, 284, 331, 346, 295, 359, 359, 317, 345],
        e: [207000, 207000, 207000, 207000, 207000, 207000, 207000, 207000, 207000, 207000],
        g: [79000, 79000, 79000, 79000, 79000, 79000, 79000, 79000, 79000, 79000],
        mu: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
        ro: [7860, 7860, 7860, 7860, 7860, 7860, 7860, 7860, 7860, 7860],
        rating: 4
    },
    "Aluminum": {
        su: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        sy: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
        e: [70000, 70000, 70000, 70000, 70000, 70000, 70000, 70000, 70000, 70000],
        g: [26000, 26000, 26000, 26000, 26000, 26000, 26000, 26000, 26000, 26000],
        mu: [0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33, 0.33],
        ro: [2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700, 2700],
        rating: 3
    },
    "Titanium": {
        su: [800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250],
        sy: [700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150],
        e: [105000, 105000, 105000, 105000, 105000, 105000, 105000, 105000, 105000, 105000],
        g: [45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000],
        mu: [0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32],
        ro: [4500, 4500, 4500, 4500, 4500, 4500, 4500, 4500, 4500, 4500],
        rating: 5
    },
    "Copper": {
        su: [210, 215, 220, 225, 230, 235, 240, 245, 250, 255],
        sy: [70, 75, 80, 85, 90, 95, 100, 105, 110, 115],
        e: [110000, 110000, 110000, 110000, 110000, 110000, 110000, 110000, 110000, 110000],
        g: [42000, 42000, 42000, 42000, 42000, 42000, 42000, 42000, 42000, 42000],
        mu: [0.34, 0.34, 0.34, 0.34, 0.34, 0.34, 0.34, 0.34, 0.34, 0.34],
        ro: [8960, 8960, 8960, 8960, 8960, 8960, 8960, 8960, 8960, 8960],
        rating: 2
    },
    "Magnesium": {
        su: [150, 155, 160, 165, 170, 175, 180, 185, 190, 195],
        sy: [60, 65, 70, 75, 80, 85, 90, 95, 100, 105],
        e: [45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000],
        g: [17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000],
        mu: [0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35],
        ro: [1740, 1740, 1740, 1740, 1740, 1740, 1740, 1740, 1740, 1740],
        rating: 1
    },
    "Brass": {
        su: [340, 345, 350, 355, 360, 365, 370, 375, 380, 385],
        sy: [120, 125, 130, 135, 140, 145, 150, 155, 160, 165],
        e: [100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000],
        g: [37000, 37000, 37000, 37000, 37000, 37000, 37000, 37000, 37000, 37000],
        mu: [0.31, 0.31, 0.31, 0.31, 0.31, 0.31, 0.31, 0.31, 0.31, 0.31],
        ro: [8500, 8500, 8500, 8500, 8500, 8500, 8500, 8500, 8500, 8500],
        rating: 2
    }
};

let predictionResults = {}; // Store the results globally

// Mobile Menu Toggle and Carousel Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Highlight active page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'rambabu.html';
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });

    // Carousel Functionality
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const leftButton = document.querySelector('.carousel-button.left');
    const rightButton = document.querySelector('.carousel-button.right');

    if (carousel && carouselItems.length > 0) {
        let currentIndex = 0;

        function updateCarousel() {
            carouselItems.forEach((item, index) => {
                item.classList.toggle('active', index === currentIndex);
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        leftButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
            updateCarousel();
        });

        rightButton.addEventListener('click', () => {
            currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });

        // Initialize carousel
        updateCarousel();
    }
});

// Dashboard Functionality
function showInterface(interfaceNum) {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        sec.style.display = 'none';
        sec.classList.remove('fade-in');
    });
    const targetSection = document.getElementById('interface-' + interfaceNum);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.classList.add('fade-in');
        if (interfaceNum === 3) {
            displayPredictionResults();
        }
    }
}

function loadMaterialData(materialType) {
    if (!materialType || !materialData[materialType]) return;

    const material = materialData[materialType];
    const properties = ['su', 'sy', 'e', 'g', 'mu', 'ro'];

    properties.forEach(prop => {
        const selectElement = document.getElementById(prop);
        selectElement.innerHTML = '';

        const uniqueValues = [...new Set(material[prop])];

        uniqueValues.forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            selectElement.appendChild(option);
        });

        if (uniqueValues.length > 0) {
            selectElement.value = uniqueValues[0];
        } else {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'No values available';
            selectElement.appendChild(option);
        }
    });
}

function predict() {
    const industry = document.getElementById("industry").value;
    const material = document.getElementById("material").value;

    const su = parseFloat(document.getElementById("su").value);
    const sy = parseFloat(document.getElementById("sy").value);
    const e = parseFloat(document.getElementById("e").value);
    const g = parseFloat(document.getElementById("g").value);
    const mu = parseFloat(document.getElementById("mu").value);
    const ro = parseFloat(document.getElementById("ro").value);
    const customParameter = document.getElementById("custom-parameter").value;

    if (isNaN(su) || isNaN(sy) || isNaN(e) || isNaN(g) || isNaN(mu) || isNaN(ro)) {
        alert("Please select a value for all material properties.");
        return;
    }

    if (materialData.hasOwnProperty(material)) {
        const selectedMaterial = materialData[material];
        let rating = selectedMaterial.rating;
        let stars = "";

        if (su > 500 && sy > 300 && e > 150 && g > 70 && mu > 0.35 && ro > 5) {
            rating = 5;
        }
        for (let i = 0; i < rating; i++) {
            stars += "<i class='fas fa-star'></i>";
        }

        predictionResults = {
            industry: industry,
            material: material,
            su: su,
            sy: sy,
            e: e,
            g: g,
            mu: mu,
            ro: ro,
            customParameter: customParameter,
            rating: rating,
            stars: stars
        };
        showInterface(3);
    } else {
        alert("Please select a valid material.");
    }
}

function displayPredictionResults() {
    if (!predictionResults) {
        alert("Please run a prediction first.");
        return;
    }

    const resultDiv = document.getElementById("result");
    const recommendationDiv = document.getElementById("recommendation");
    const alternativeList = document.getElementById("alternative-list");
    recommendationDiv.textContent = `Recommended Material: ${predictionResults.material}`;
    resultDiv.innerHTML = predictionResults.stars;

    let higherRatedMaterial = null;
    let bestRating = 0;

    for (const materialName in materialData) {
        if (materialName !== predictionResults.material) {
            const materialRating = materialData[materialName].rating;
            if (materialRating > predictionResults.rating) {
                let newRating = (materialRating - predictionResults.rating);
                if (newRating > bestRating) {
                    bestRating = newRating;
                    higherRatedMaterial = materialName;
                }
            }
        }
    }

    if (higherRatedMaterial) {
        alternativeList.innerHTML = `
            <h4>Consider the following for greater stability</h4>
            <p>Material: ${higherRatedMaterial} (Rating: ${materialData[higherRatedMaterial].rating})</p>
        `;
    } else {
        alternativeList.innerHTML = `<li>No higher-rated material found.</li>`;
    }
}

function downloadReport() {
    if (!predictionResults) {
        alert("Please run a prediction first.");
        return;
    }

    // Redirect to report.html with query parameters
    const queryParams = new URLSearchParams({
        material: predictionResults.material,
        industry: predictionResults.industry,
        su: predictionResults.su,
        sy: predictionResults.sy,
        e: predictionResults.e,
        g: predictionResults.g,
        mu: predictionResults.mu,
        ro: predictionResults.ro,
        stars: predictionResults.stars
    }).toString();
    window.location.href = `report.html?${queryParams}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const materialDropdown = document.getElementById("material");
    if (materialDropdown) {
        for (const material in materialData) {
            if (materialData.hasOwnProperty(material)) {
                let option = document.createElement("option");
                option.value = material;
                option.text = material;
                materialDropdown.add(option);
            }
        }
    }

    // Populate report page if on report.html
    if (window.location.pathname.includes('report.html')) {
        const params = new URLSearchParams(window.location.search);
        const reportContent = document.getElementById('report-content');
        if (reportContent) {
            reportContent.innerHTML = `
                <h3>Material Prediction Report</h3>
                <p><strong>Recommended Material:</strong> ${params.get('material') || 'N/A'}</p>
                <p><strong>Industry:</strong> ${params.get('industry') || 'N/A'}</p>
                <p><strong>Ultimate Strength (Su):</strong> ${params.get('su') || 'N/A'}</p>
                <p><strong>Yield Strength (Sy):</strong> ${params.get('sy') || 'N/A'}</p>
                <p><strong>Elastic Limit (E):</strong> ${params.get('e') || 'N/A'}</p>
                <p><strong>Modulus of Rigidity (G):</strong> ${params.get('g') || 'N/A'}</p>
                <p><strong>Mu Coefficient (Mu):</strong> ${params.get('mu') || 'N/A'}</p>
                <p><strong>Ro (Density):</strong> ${params.get('ro') || 'N/A'}</p>
                <p><strong>Strength Rating:</strong> ${params.get('stars') || 'N/A'}</p>
            `;
        }
    }
});