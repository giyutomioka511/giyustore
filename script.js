const prices = {
  Instagram: { Followers: 55, Likes: 14, Views: 9, Comments: 14 },
  TikTok: { Followers: 69, Likes: 14, Views: 10, Comments: 14 },
  Facebook: { Followers: 70, Likes: 100, Views: 100 },
  Telegram: { Members: 75, Views: 15 },
  WhatsApp: { Members: 85 },
  Twitter: { Followers: 300, Likes: 55, Retweets: 55, Impressions: 55 }
};

document.getElementById("orderForm").addEventListener("input", function () {
  const platform = this.platform.value;
  const service = this.service.value;
  const qty = parseInt(this.quantity.value) || 0;
  const price = prices[platform]?.[service] || 0;
  document.getElementById("total").innerText = price * qty;
});
