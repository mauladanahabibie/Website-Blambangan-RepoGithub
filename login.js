const container = document.getElementById('container');
const daftarBtn = document.getElementById('daftar');
const loginBtn = document.getElementById('login');

daftarBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});