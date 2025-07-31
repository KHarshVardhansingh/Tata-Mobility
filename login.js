function showLogin() {
    document.getElementById("login-form").style.display = "flex";
    document.getElementById("register-form").style.display = "none";
  }
  
  function showRegister() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "flex";
  }
  
  function register() {
    const email = document.getElementById("register-email").value.trim();
    const name = document.getElementById("register-name").value.trim();
    const age = document.getElementById("register-age").value.trim();
    const username = document.getElementById("register-username").value.trim();
    const password = document.getElementById("register-password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
  
    if (!email || !name || !age || !username || !password || !confirmPassword) {
      alert("Please fill all fields!");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const userExists = users.find(user => user.username === username);
    if (userExists) {
      alert("Username already exists!");
      return;
    }
  
    users.push({
      email: email,
      name: name,
      age: age,
      username: username,
      password: password
    });
  
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Registration successful!");
    showLogin();
  }
  
  function login() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();
  
    if (!username || !password) {
      alert("Please fill all fields!");
      return;
    }
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const validUser = users.find(user => user.username === username && user.password === password);
  
    if (validUser) {
      alert("Welcome " + validUser.name + " (" + validUser.email + ")!");
       window.location.href = 'profile.html'
    } else {
      alert("Invalid username or password!");
    }
  }

  function socialLogin(platform) {
    console.log(`Logging in with ${platform}`);
    alert(`Redirecting to ${platform} login...`);
}
  