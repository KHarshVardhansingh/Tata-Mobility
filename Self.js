document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const vehicleModel = document.getElementById('vehicleModel').value;
    const bookingType = document.getElementById('bookingType').value;
    const pickupDate = document.getElementById('pickupDate').value;
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;

    if (vehicleModel && bookingType && pickupDate && name && contact) {
        document.getElementById('confirmationMessage').classList.remove('hidden');
        document.getElementById('confirmationDetails').innerHTML = `
            Thank you ${name}! Your booking for a ${vehicleModel} for ${bookingType} on ${pickupDate} has been confirmed.<br>
            We will contact you at ${contact} for further details.
        `;
    }
});
