document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "ajis" && password === "300901") {  // Sederhana, untuk contoh
        localStorage.setItem('name', username);
        window.location.href = 'wisata.html';
    } else {
        alert('Username atau password salah!');
    }
});

function goBack() {
    window.history.back();
}
