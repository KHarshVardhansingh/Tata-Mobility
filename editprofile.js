document.getElementById('editProfileForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Save data locally (simulate saving)
    localStorage.setItem('profileName', name);
    localStorage.setItem('profileEmail', email);
    localStorage.setItem('profilePhone', phone);
    localStorage.setItem('profileAddress', address);

    // Redirect or alert
    alert('Profile updated successfully!');
    window.location.href = "profile.html"; // Redirect back to profile page
});
