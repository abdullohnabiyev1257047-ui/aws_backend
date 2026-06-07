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
    title: "Tokyo ko'chalari",
    description:
      "Yaponiya poytaxti Tokyo — dunyo bo'yicha eng katta shaharlardan biri. Zamonaviy hayot va an'anaviy madaniyat bir yerda uyg'unlashgan.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600",
    author: "Akira Tanaka",
    date: "10 May 2025",
    category: "Sayohat",
  },
  {
    id: 2,
    title: "Tog'larda kuz",
    description:
      "Qizil va sariq barglar orasida yo'l bosish — unutilmas tajriba. Tog' havosi va sukunat odamga kuch beradi.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    author: "Maria Lopez",
    date: "18 May 2025",
    category: "Tabiat",
  },
  {
    id: 3,
    title: "Dengiz bo'yida tong",
    description:
      "Quyosh chiqishini dengiz bo'yida kuzatish — kunning eng go'zal lahzalaridan biri. Suv ustidagi aks sado ko'zni quvontiradi.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
    author: "James Carter",
    date: "25 May 2025",
    category: "Tabiat",
  },
  {
    id: 4,
    title: "Zamonaviy arxitektura",
    description:
      "Zamonaviy binolar va klassik uslub bir-biriga qo'shilib, shahar manzarasini noyob ko'rinishga keltiradi.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600",
    author: "Sofia Rossi",
    date: "1 Iyun 2025",
    category: "Dizayn",
  },
  {
    id: 5,
    title: "O'rmon sayohati",
    description:
      "Qalin o'rmon ichidan o'tuvchi so'qmoqlar tabiat bilan uyg'unlashish va ichki tinchlik topishning eng yaxshi usuli.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600",
    author: "Lars Hansen",
    date: "3 Iyun 2025",
    category: "Tabiat",
  },
  {
    id: 6,
    title: "Sahro sirlari",
    description:
      "Cheksiz qumloq va moviy osmon ostida kichik bir nuqtadek his qilasiz o'zingizni. Sahro — qo'rqinchli va ajoyib bir vaqtda.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600",
    author: "Fatima Al-Rashid",
    date: "5 Iyun 2025",
    category: "Sayohat",
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
