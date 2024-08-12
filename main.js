const displayedImg = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const darkButton = document.querySelector('.dark');
let isDarkened = false;

function changeImage(src, alt) {
    displayedImg.src = src;
    displayedImg.alt = alt;

    // Update specs for each image
    const specsList = document.getElementById('specs-list');
    switch (true) {
        case alt.includes('Front View'):
            specsList.innerHTML = `
                <li>Display: 6.8-inch Dynamic AMOLED 2X, 120Hz, HDR10+</li>
                <li>Front Camera: 12MP with Dual Pixel Autofocus</li>
                <li>Processor: Qualcomm Snapdragon 8 Gen 2</li>
                <li>OS: Android 13 with One UI 5.1</li>`;
            break;
        case alt.includes('Back View'):
            specsList.innerHTML = `
                <li>Camera: 200MP Wide, 12MP Ultra-wide, 10MP Periscope Telephoto, 10MP Telephoto</li>
                <li>Design: Glass front (Gorilla Glass Victus 2), glass back, aluminum frame</li>
                <li>Battery: 5000mAh with 45W Fast Charging</li>
                <li>Processor: Qualcomm Snapdragon 8 Gen 2</li>`;
            break;
        case alt.includes('Side View'):
            specsList.innerHTML = `
                <li>Thickness: 8.9mm</li>
                <li>Weight: 234g</li>
                <li>Frame: Aluminum</li>
                <li>Storage: Up to 1TB with 12GB RAM</li>`;
            break;
        case alt.includes('Camera Close-up'):
            specsList.innerHTML = `
                <li>Main Camera: 200MP with f/1.7 aperture</li>
                <li>Zoom: 10x optical, 100x digital</li>
                <li>Video: 8K at 24fps, 4K at 60fps</li>`;
            break;
        case alt.includes('S Pen Feature'):
            specsList.innerHTML = `
                <li>S Pen: Enhanced precision and usability</li>
                <li>Latency: 2.8ms</li>
                <li>Connectivity: Bluetooth, Air Actions</li>`;
            break;
        default:
            specsList.innerHTML = `
                <li>Display: 6.8-inch Dynamic AMOLED 2X, 120Hz, HDR10+</li>
                <li>Camera: 200MP Wide, 12MP Ultra-wide, 10MP Periscope Telephoto, 10MP Telephoto</li>
                <li>Processor: Qualcomm Snapdragon 8 Gen 2</li>
                <li>Battery: 5000mAh with 45W Fast Charging</li>
                <li>S Pen: Enhanced precision and usability</li>
                <li>Storage: Up to 1TB with 12GB RAM</li>
                <li>OS: Android 13 with One UI 5.1</li>`;
    }
}

darkButton.addEventListener('click', function() {
    if (!isDarkened) {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Darken the image
        darkButton.textContent = 'Lighten'; // Update button text
    } else {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Lighten the image
        darkButton.textContent = 'Darken'; // Update button text
    }
    isDarkened = !isDarkened; // Toggle the state
});
