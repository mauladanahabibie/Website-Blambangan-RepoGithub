const container_kiri = document.getElementById("container-kiri");
const container_kanan = document.getElementById("container-kanan");
const kananBtn = document.getElementById("fitur-kanan");
const kiriBtn = document.getElementById("fitur-kiri");

kiriBtn.addEventListener("click", () => {
  container_kanan.classList.toggle('d-none');
});

kananBtn.addEventListener("click", () => {
  container_kiri.classList.toggle('d-none');
});
