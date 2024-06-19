// Function to open a specific popup
function openPopup(popupId, productName = '') {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'flex';
        // Example: Pre-fill product name in buy popup
        if (popupId === 'buyPopup') {
            document.getElementById('buyProductName').textContent = productName;
        }
    }
}

// Function to close a specific popup
function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none';
    }
}

// Function to apply product filters (dummy function for example)
function applyFilters() {
    // Implement filter functionality as per requirements
    console.log('Filters applied');
}

// Function to simulate buying a product (dummy function for example)
function buyProduct(productName) {
    openPopup('buyPopup', productName);
}
