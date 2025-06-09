
const prices = {
    instagram: { followers: 55, likes: 14, views: 9, comments: 14 },
    tiktok: { followers: 69, likes: 14, views: 10, comments: 14 },
    facebook: { followers: 70, likes: 100, views: 100 },
    telegram: { members: 75, views: 15 },
    whatsapp: { members: 85 },
    twitter: { followers: 300, likes: 55, retweets: 55, impressions: 55 }
};

function updateServiceOptions() {
    const platform = document.getElementById("platform").value;
    const serviceSelect = document.getElementById("service");
    serviceSelect.innerHTML = "";

    if (!platform || !prices[platform]) return;

    Object.keys(prices[platform]).forEach(service => {
        const option = document.createElement("option");
        option.value = service;
        option.textContent = service.charAt(0).toUpperCase() + service.slice(1);
        serviceSelect.appendChild(option);
    });
}

function calculateTotal() {
    const platform = document.getElementById("platform").value;
    const service = document.getElementById("service").value;
    const qty = parseInt(document.getElementById("quantity").value);
    const totalEl = document.getElementById("total");

    if (platform && service && prices[platform] && prices[platform][service]) {
        const total = qty * prices[platform][service];
        totalEl.textContent = `Rp ${total.toLocaleString("id-ID")}`;
    } else {
        totalEl.textContent = "Rp 0";
    }
}

document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const platform = document.getElementById("platform").value;
    const service = document.getElementById("service").value;
    const qty = document.getElementById("quantity").value;
    const total = document.getElementById("total").textContent;

    const msg = `Halo admin, saya ingin order:
Platform: ${platform}
Layanan: ${service}
Jumlah: ${qty}
Total: ${total}`;
    const waLink = `https://wa.me/6283138846539?text=${encodeURIComponent(msg)}`;
    window.open(waLink, '_blank');
});
