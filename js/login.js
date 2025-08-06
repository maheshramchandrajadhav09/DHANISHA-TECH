document.getElementById("authForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const authType = document.getElementById("authType").value;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  if (!email || !password || !role) {
    alert("Please fill in all required fields.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const existingUser = users.find(u => u.email === email);

  if (authType === "login") {
    if (!existingUser || existingUser.password !== password) {
      alert("Invalid credentials or user not registered.");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
    window.location.href = "profile.html";

  } else if (authType === "signup") {
    if (existingUser) {
      alert("User already exists. Please login.");
      return;
    }

    if (!name) {
      alert("Name is required for Sign Up.");
      return;
    }

    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    window.location.href = "profile.html";
  }
});
