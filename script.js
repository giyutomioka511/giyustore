
const harga = {
  instagram: { followers: 55, likes: 14, views: 9, comments: 14 },
  tiktok: { followers: 69, likes: 14, views: 10, comments: 14 },
  facebook: { followers: 70, likes: 100, views: 100 },
  telegram: { members: 75, views: 15 },
  whatsapp: { members: 85 },
  twitter: { followers: 300, likes: 55, retweets: 55, impression: 55 }
};

const platformSelect = document.getElementById("platform");
const serviceSelect = document.getElementById("service");
const jumlahInput = document.getElementById("jumlah");
const totalHargaDisplay = document.getElementById("totalHarga");
const orderForm = document.getElementById("orderForm");

platformSelect.addEventListener("change", () => {
  const layanan = harga[platformSelect.value];
  serviceSelect.innerHTML = '<option value="">-- Pilih Layanan --</option>';
  if (layanan) {
    Object.keys(layanan).forEach(l => {
      const opt = document.createElement("option");
      opt.value = l;
      opt.textContent = l.charAt(0).toUpperCase() + l.slice(1);
      serviceSelect.appendChild(opt);
    });
  }
  updateHarga();
});

[jumlahInput, serviceSelect].forEach(el => {
  el.addEventListener("input", updateHarga);
});

function updateHarga() {
  const plat = platformSelect.value;
  const layanan = serviceSelect.value;
  const jumlah = parseInt(jumlahInput.value);
  if (plat && layanan && jumlah && harga[plat][layanan]) {
    const total = harga[plat][layanan] * jumlah;
    totalHargaDisplay.textContent = `Rp${total.toLocaleString("id-ID")}`;
  } else {
    totalHargaDisplay.textContent = "Rp0";
  }
}

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const plat = platformSelect.value;
  const layanan = serviceSelect.value;
  const jumlah = jumlahInput.value;
  const username = document.getElementById("username").value;
  const totalText = totalHargaDisplay.textContent;
  const pesan = `Halo Admin, saya ingin order:
Platform: ${plat}
Layanan: ${layanan}
Jumlah: ${jumlah}
Username: ${username}
Total: ${totalText}`;
  const link = `https://wa.me/6283138846539?text=${encodeURIComponent(pesan)}`;
  window.open(link, '_blank');
});

const telegramLink = document.getElementById("telegramLink");
telegramLink.addEventListener("click", (e) => {
  const plat = platformSelect.value;
  const layanan = serviceSelect.value;
  const jumlah = jumlahInput.value;
  const username = document.getElementById("username").value;
  const totalText = totalHargaDisplay.textContent;
  const pesan = `Halo Admin, saya ingin order:
Platform: ${plat}
Layanan: ${layanan}
Jumlah: ${jumlah}
Username: ${username}
Total: ${totalText}`;
  telegramLink.href = `https://t.me/gaxshaa?text=${encodeURIComponent(pesan)}`;
});
