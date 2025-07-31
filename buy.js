document.getElementById("buyForm").addEventListener("submit", function(event){
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const variant = document.getElementById("variant").value;
    const color = document.getElementById("color").value.trim();

    if(fullName && email && phone && variant && color){
        alert(`Thank you, ${fullName}! Your booking for Tata Nexon (${variant} - ${color}) has been successfully placed. We will contact you shortly on ${phone}.`);
        document.getElementById("buyForm").reset();
    } else {
        alert("Please fill all the fields correctly.");
    }
});
