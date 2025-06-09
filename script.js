
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const platform = document.getElementById("platform").value;
  const service = document.getElementById("service").value;
  const jumlah = document.getElementById("jumlah").value;
  const nama = document.getElementById("nama").value;
  const nowa = document.getElementById("nowa").value;

  const pesan = `*PESANAN BARU - GIYU STORE*\nNama: ${nama}\nPlatform: ${platform}\nLayanan: ${service}\nJumlah: ${jumlah}\nNomor WA: ${nowa}`;
  const url = `https://wa.me/6283138846539?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
});
