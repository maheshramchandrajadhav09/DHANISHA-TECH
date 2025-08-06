// js/auth-check.js

const user = JSON.parse(localStorage.getItem("loggedInUser"));

// Common login check
if (!user) {
  alert("Please login first.");
  window.location.href = "login.html";
}

// Role-based access helper
function requireRole(role) {
  if (!user || user.role !== role) {
    alert(`Access Denied: Only ${role}s allowed.`);
    window.location.href = "login.html";
  }
}
