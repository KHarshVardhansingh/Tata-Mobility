const colors = ["White", "Yellow", "Silver", "Grey", "Blue"];

const colorList = document.getElementById("color-list");

colors.forEach(color => {
    const li = document.createElement('li');
    li.textContent = color;
    colorList.appendChild(li);
});

function bookNow() {
    alert("Redirecting to booking page...");
    window.location.href = "book.html";
}
