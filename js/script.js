// Menampilkan pesan saat tombol diklik
const tombol = document.getElementById("btnPesan");
const pesan = document.getElementById("pesan");

tombol.addEventListener("click", function () {
  pesan.textContent = "Halo! Terima kasih sudah mengunjungi website biodata saya 😊";
});
