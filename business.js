function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name === "" || email === "" || message === "") {
      alert("All fields are required!");
      return false;
    } else {
      document.getElementById('contactForm').reset(); // Reset the form fields
      document.getElementById('successMessage').style.display = 'block'; // Show success message
      return false; // Prevent form submission (can replace with actual submission logic)
    }
  }