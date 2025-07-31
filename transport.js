function updateVariantDetails() {
    const variant = document.getElementById('variantSelect').value;
    const detailsDiv = document.getElementById('variantDetails');

    let content = '';

    if (variant === "Standard") {
        content = `
            <ul>
                <li>Basic Seats</li>
                <li>Manual Air Conditioning</li>
                <li>Standard Safety Features</li>
            </ul>`;
    } else if (variant === "Premium") {
        content = `
            <ul>
                <li>Premium Seats</li>
                <li>Automatic Climate Control</li>
                <li>Advanced Safety Package</li>
                <li>Touchscreen Infotainment</li>
            </ul>`;
    } else if (variant === "Deluxe") {
        content = `
            <ul>
                <li>Luxury Reclining Seats</li>
                <li>Premium Interior Finish</li>
                <li>Top Safety Features</li>
                <li>Premium Sound System</li>
                <li>Onboard WiFi</li>
            </ul>`;
    } else {
        content = `<p>Select a variant to see features.</p>`;
    }

    detailsDiv.innerHTML = content;
}
