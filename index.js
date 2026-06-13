const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3005;

app.use(cors());
app.use(express.json());

// =====================
//  MA'LUMOTLAR — ARRAY
// =====================
const posts = [
  {
    id: 1,
    title: "Erkaklar uchun klassik kostyum",
    description:
      "Zamonaviy dizayn va yuqori sifatli matodan tayyorlangan klassik kostyum rasmiy uchrashuvlar va tadbirlar uchun ajoyib tanlov.",
    image: "https://images.unsplash.https://www.instagram.com/p/CWBclAhKgpi/",
    author: "Fashion House",
    date: "10 May 2025",
    category: "Erkaklar kiyimi",
  },
  {
    id: 2,
    title: "Ayollar uchun yozgi ko'ylak",
    description:
      "Yengil va qulay matodan tikilgan yozgi ko'ylak issiq kunlarda nafis ko'rinish va maksimal qulaylik taqdim etadi.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
    author: "Style Studio",
    date: "18 May 2025",
    category: "Ayollar kiyimi",
  },
  {
    id: 3,
    title: "Sport kiyimlari to'plami",
    description:
      "Faol hayot tarzi uchun mo'ljallangan sport kiyimlari harakat erkinligi va zamonaviy uslubni birlashtiradi.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
    author: "Active Wear",
    date: "25 May 2025",
    category: "Sport kiyimlari",
  },
  {
    id: 4,
    title: "Premium charm kurtka",
    description:
      "Tabiiy charm materialdan tayyorlangan kurtka kundalik va zamonaviy uslubni yoqtiruvchilar uchun ideal tanlov.",
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600",
    author: "Urban Fashion",
    date: "1 Iyun 2025",
    category: "Ustki kiyim",
  },
  {
    id: 5,
    title: "Bolalar uchun qulay kiyimlar",
    description:
      "Yumshoq va sifatli matodan tikilgan bolalar kiyimlari kun davomida qulaylik va erkin harakatlanishni ta'minlaydi.",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600",
    author: "Kids Collection",
    date: "3 Iyun 2025",
    category: "Bolalar kiyimi",
  },
  {
    id: 6,
    title: "Qishki palto kolleksiyasi",
    description:
      "Sovuq mavsum uchun mo'ljallangan zamonaviy paltolar issiqlikni saqlab, nafis ko'rinish yaratadi.",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
    author: "Winter Style",
    date: "5 Iyun 2025",
    category: "Qishki kiyim",
  },
];

// =====================
//  ROUTES
// =====================

// Barcha postlar
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Bitta post
app.get("/api/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post topilmadi" });
  res.json(post);
});

// Server ishga tushish
app.listen(PORT, () => {
  console.log(`✅ Backend ishlayapti: http://localhost:${PORT}`);
  console.log(`📦 Postlar soni: ${posts.length}`);
});
