// Handle user authentication (simulate login/signup)
function simulateLogin(email, password) {
    // You can replace this with real login logic
    localStorage.setItem('user', JSON.stringify({ email }));
}

function simulateSignup(email, password) {
    // You can replace this with real signup logic
    localStorage.setItem('user', JSON.stringify({ email }));
}

// Check if the user is logged in
function checkLoginStatus() {
    const user = localStorage.getItem('user');
    if (user) {
        document.getElementById('login-link').style.display = 'none';
        document.getElementById('post-button').style.display = 'inline-block';
    } else {
        document.getElementById('login-link').style.display = 'inline-block';
    }
}

// Handle the "Post" button functionality
function openPostForm() {
    // Open a form to upload videos or create content
    alert('Open video creation form.');
}

// Event Listeners
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    simulateLogin(email, password);
    window.location.href = 'index.html';
});

document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    simulateSignup(email, password);
    window.location.href = 'index.html';
});

// Check login status on homepage load
window.onload = checkLoginStatus;
