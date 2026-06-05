// Mahsulotlarni shu yerda qo'shing - juda oson!
// Yangi mahsulot qo'shish uchun shunchaki ro'yxatga qo'shing
export interface Product {
  id: string;
  name: string;
  price: number; // Coin narxi
  images: string[]; // Birinchi rasm asosiy rasm bo'ladi
  description?: string;
  category?: string;
}

export const categories = [
  "Barchasi",
  "Smart soatlar",
  "Quloqchinlar",
  "Noutbuklar",
  "Kompyuterlar",
  "Planshetlar",
  "Kitoblar",
  "Aksessuarlar",
  "To'plamlar",
  "Telefonlar",
  "Futbol",
];

import product1 from "../astets/photo_2026-02-12_13-45-14.jpg"
import product2 from "../astets/photo_2026-02-12_13-45-32.jpg"
import product3 from "../astets/photo_2026-02-12_13-45-36.jpg"
import product4 from "../astets/photo_2026-02-12_13-45-40.jpg"
import product5 from "../astets/photo_2026-02-12_16-02-28.jpg"
import product6 from "../astets/photo_2026-02-12_16-02-31.jpg"
import product7 from "../astets/ij1.jpg"
import product8 from "../astets/ij2.jpg"

export const products: Product[] = [
  // === SMART SOATLAR ===
  {
    id: "1",
    name: "Smart Watch box",
    price: 660,
    images: [
      product2,
      product7,
      product8,
    ],
    description: " 8 xil rangli band  , 4 ta  remishok va tetrs  mavjud",
    category: "Smart soatlar",
  },
  {
    id: "2",
    name: "Smart Watch X8 Pro",
    price: 250,
    images: [
      "https://images.uzum.uz/d535kv3s2tab83s7av8g/original.jpg",
      "https://images.uzum.uz/d535kurs2tab83s7av80/original.jpg",
      
    ],
    description: "Oddiy smart soat, o'quvchilar uchun qulay. Soat, xabarlar, qadamlar hisoblagich.",
    category: "Smart soatlar",
  },
  {
    id: "3",
    name: "Sport Smart Watch M5",
    price: 350,
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400",
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=400",
    ],
    description: "Qadam, yurak urishi, kaloriya hisoblagich. Sport uchun ideal.",
    category: "Smart soatlar",
  },
  {
    id: "4",
    name: "Bluetooth Smart Watch T500",
    price: 400,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400",
    ],
    description: "Telefon bilan bog'lanadi, qo'ng'iroqlarni qabul qilish, musiqa boshqarish.",
    category: "Smart soatlar",
  },
  {
    id: "5",
    name: "Kids Smart Watch Y1",
    price: 200,
    images: [
      "https://olcha.uz/image/original/products/2020-07-29/xiaomi-mi-band-5-black-xmsh10hm-global-version-14931-0.jpeg",
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
      
      "https://olcha.uz/image/original/products/2020-07-29/xiaomi-mi-band-5-black-xmsh10hm-global-version-14931-1.jpeg"
    ],
    description: "O'smirlar uchun smart soat, GPS tracker, SOS tugmasi.",
    category: "Smart soatlar",
  },
  {
    id: "6",
    name: "Smart Band M7 Pro",
    price: 3150,
    images: [
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/d82c8d1619ad8176d665453cfb2e55f02024061113413066673DCPRsTEHnT.jpg.webp",
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/9f61408e3afb633e50cdf1b20de6f4662024061113413168818r767XJ6v3p.jpg.webp",
    ],
    description: "Mi Band turidagi smart bilakuzuk. Engil, uzoq batareya, sport rejimlari.",
    category: "Smart soatlar",
  },

  // === QULOQCHINLAR ===
  {
    id: "7",
    name: "TWS Bluetooth Earbuds i12",
    price: 500,
    images: [
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/088294b9a7476455eadcda2ef90d6f3a2024022216310082860viJEPUPd2s.png.webp",
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/b5ffd023d0808516aaae2ab080d9b28120240222163350516391VP4UsMafm.png.webp",
    ],
    description: "AirPods uslubidagi Bluetooth quloqchin. Toza ovoz, kompakt dizayn.",
    category: "Quloqchinlar",
  },
  {
    id: "8",
    name: "Smartwatch",
    price: 500,
    images: [
      "https://images.uzum.uz/ci89ig75d7kom1ti6c10/original.jpg"
    ],
    description: "Bluetooth versiyasi: V4.1 + EDR chastota diapazoni: 20 Gts dan 20000 Gts gacha uzatish masofasi: 10 metrgacha ",
    category: "Quloqchinlar",
  },
  {
    id: "9",
    name: "Gaming Earbuds G20",
    price: 1370,
    images: [
      "https://images.uzum.uz/ct9fmcui4n3ehka2k8f0/original.jpg",
      "https://images.uzum.uz/ct9fmcviub3d1eokoitg/original.jpg"
    ],
    description: "Low latency gaming quloqchin. O'yinlar uchun tez ulanish.",
    category: "Quloqchinlar",
  },
  {
    id: "10",
    name: "Simsiz quloqchinlar TWS i18 Pods",
    price: 218,
    images: [
      "https://images.uzum.uz/ch0fpivhj8j9g69dv1rg/original.jpg",
    ],
    description: "i18-TWS simsiz quloqchinlari ixcham.",
    category: "Quloqchinlar",
  },
  {
    id: "11",
    name: "Sennheiser PC 3 CHAT",
    price: 870,
    images: [
      "https://asset.openshop.uz/storage/uploads/products/photos/202402/OQxcdolawnHZdQCfQwj58ABWtppI8k2hnSNsvmxk.jpg",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    ],
    description: "Katta naushnik (headband), chuqur bass, uzoq batareya.",
    category: "Quloqchinlar",
  },
  {
    id: "12",
    name: "Simli Naushnik HF-230",
    price: 500,
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400",
    ],
    description: "Mikrofon bilan simli naushnik. Dars va qo'ng'iroqlar uchun.",
    category: "Quloqchinlar",
  },
  {
    id: "13",
    name: "Noise Cancelling Earbuds NC300",
    price: 600,
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
      "https://images.unsplash.com/photo-1631867675167-90a456a90863?w=400",
    ],
    description: "Shovqinni bekor qiluvchi quloqchin. Tinch muhitda ishlash uchun.",
    category: "Quloqchinlar",
  },
  {
    id: "14",
    name: "Sport Naushnik S880",
    price: 170,
    images: [
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=400",
    ],
    description: "Quloqdan ushmaydigan sport naushnik. Yugurish va mashq uchun.",
    category: "Quloqchinlar",
  },
  {
    id: "15",
    name: "Simsiz quloqchinlar Wireless MS-881 A",
    price: 1040,
    images: [
      product4
    ],
    description: "Bluetooth versiyasi: V4.1 + EDR chastota diapazoni: 20 Gts dan 20000 Gts gacha uzatish masofasi: 10 metrgacha ",
    category: "Quloqchinlar",
  },

  // === NOUTBUKLAR ===
  {
    id: "16",
    name: "MacBook Air 13inch",
    price: 40000,
    images: [
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c14f7a753888287112058264fa40b72d2025071215424298304F7KJjzbtra.webp",
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/737e25c07c3dfe29758e947257946a902025071215424264335rMqvr8lNWL.webp",
    ],
    description: "Apple MacBook Air 13 dyuymli noutbuk: 10 yadroli protsessor va 8 yadroli grafik protsessorga ega Apple M4 protsessori, 16 GB operativ xotira, 256 GB SSD ",
    category: "Noutbuklar",
  },
  {
    id: "17",
    name: "Noutbuk HP AMD",
    price: 4500,
    images: [
      "https://images.uzum.uz/d4rrl33tqdhgicat60rg/original.jpg",
      "https://images.uzum.uz/d2eq5mfiub3brtuame1g/original.jpg",
    ],
    description: "Noutbuk HP AMD Ryzen 5-7520U, DDR5 8GB, SSD 512GB, Windows 11 Pro, 15.6 IPS, ",
    category: "Noutbuklar",
  },

  // === TELEFONLAR ===
  {
    id: "18",
    name: "Apple iPhone 15",
    price: 31700,
    images: [
      "https://images.uzum.uz/csoa6834nkdp9akeius0/original.jpg",
      "https://images.uzum.uz/csq4hpbvgbkpg1nlvmqg/original.jpg",
    ],
    description: "Smartfon Apple iPhone 15, 128 GB, SIM+DualSIM, g'ilof sovg'a",
    category: "Telefonlar",
  },
  {
    id: "19",
    name: "Smartfon Infinix Note 50 Pro",
    price: 3000,
    images: [
      "https://images.uzum.uz/cvub6plpb7fbmqmns8b0/original.jpg",
    ],
    description: "Smartfon Infinix Note 50 Pro, 128 GB, SIM+DualSIM, g'ilof sovg'a",
    category: "Telefonlar",
  },
  {
    id: "20",
    name: "Smartfon Xiaomi Poco C71",
    price: 4300,
    images: [
      "https://images.uzum.uz/d51rn2btqdhua1ut7tqg/original.jpg",
    ],
    description: "Smartfon Xiaomi Poco C71, 4+128GB, 32 Mp ikkita kamera, 6,88 displey",
    category: "Telefonlar",
  },

  // === KOMPYUTERLAR ===
  {
    id: "21",
    name: "Monoblok Lenovo V50a-24IMB",
    price: 16000,
    images: [
      "https://cdn.mediapark.uz/imgs/0ff4640e-d985-4f97-87e4-2956ec55db4a_Artboard-1-(6).webp",
      "https://cdn.mediapark.uz/imgs/83d01cad-dc89-4759-88b4-1b80b6bc8403_Artboard-2.webp",
    ],
    description: "Monoblok  Lenovo V50a-24IMB AIO Intel Core i3-10100T , DDR4 4GB ,  SSD 256GB , 23,8 FHD , Integrated Intel UHD",
    category: "Kompyuterlar",
  },
  {
    id: "22",
    name: "Klaviatura + Sichqoncha Komplekti",
    price: 250,
    images: [
      "https://images.unsplash.com/photo-1587829191301-26ec3d8b26f5?w=400",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    ],
    description: "Simsiz klaviatura va sichqoncha to'plami. Ofis va uy uchun.",
    category: "Kompyuterlar",
  },

  // === PLANSHETLAR ===
  {
    id: "23",
    name: "Aqliy Planshet 17 Max",
    price: 3400,
    images: [
      "https://images.uzum.uz/d63palk3obpn7570dldg/original.jpg",
    ],
    description: "Aqliy Planshet 17 Max Smart Tablet Android 15, 5G, UZIMEI, klaviatura, sichqoncha, g'ilof.",
    category: "Planshetlar",
  },

  // === KITOBLAR ===
  {
    id: "24",
    name: "Mukammal dasturlash 1. HTML va CSS",
    price: 320,
    images: [
      "https://images.uzum.uz/d5vgjdnqkmamvfqs0edg/original.jpg",
    ],
    description: "HTML va CSS asoslarini o'rganish uchun eng yaxshi kitob.",
    category: "Kitoblar",
  },
  {
    id: "25",
    name: "JavaScript",
    price: 300,
    images: [
      "https://images.uzum.uz/d3l64mrq345l7k05htug/original.jpg",
    ],
    description: "JavaScript asoslari va eng yaxshi amaliyotlar kitobi.",
    category: "Kitoblar",
  },
  {
    id: "26",
    name: "Falaq Nashr kitoblari",
    price: 240,
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    ],
    description: "O'quvchilar uchun Falaq Nashrning mashhur kitoblari to'plami.",
    category: "Kitoblar",
  },
  {
    id: "27",
    name: "Saodat Asri kitoblari",
    price: 220,
    images: [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
    ],
    description: "Saodat Asri nashriyotidan kitoblar, bilim va motivatsiya uchun.",
    category: "Kitoblar",
  },
  {
    id: "28",
    name: "Qora Psixologiya kitobi",
    price: 180,
    images: [
      "https://images.unsplash.com/photo-1529484910276-713bc6a7d1f9?w=400",
    ],
    description: "Psixologiya va shaxsni rivojlantirish bo'yicha kitob.",
    category: "Kitoblar",
  },
  {
    id: "29",
    name: "Qo'zichoqlar Sukunati kitobi",
    price: 160,
    images: [
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
    ],
    description: "Qo'zichoqlar Sukunati kitobi, o'qish va fikrlash uchun foydali.",
    category: "Kitoblar",
  },
  {
    id: "30",
    name: "Turk Shamoli kitobi",
    price: 170,
    images: [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
    ],
    description: "Turk Shamoli asari, motivatsiya va ma'naviyat uchun.",
    category: "Kitoblar",
  },
  {
    id: "31",
    name: "Izuchayem React. 2-ye izdaniye",
    price: 1440,
    images: [
      "https://images.uzum.uz/cgrrr3ng49devoadogeg/original.jpg",
    ],
    description: "Izuchayem React. 2-ye izdaniye, Chinnatambi Kirupa – React dasturlash tilini o'rganish uchun.",
    category: "Kitoblar",
  },
  {
    id: "32",
    name: "Garri Potter, to'plami, Joann Rouling",
    price: 1040,
    images: [
      "https://images.uzum.uz/clf6mjt6sfhvbd1ik13g/original.jpg",
    ],
    description: "Garri Potter to'plami, Joann Rouling – Garri Potter seriyasini o'rganish uchun.",
    category: "Kitoblar",
  },

  // === FUTBOL ===
  {
    id: "33",
    name: "Futbol butsilar",
    price: 670,
    images: [
      "https://images.uzum.uz/d291a4viub3br32163k0/original.jpg",
    ],
    description: "Futbol butsilar, erkaklar, o'smirlar uchun, 36-45 o'lcham",
    category: "Futbol",
  },
  {
    id: "33",
    name: "Futbol butsilar erkaklar uchun",
    price: 500,
    images: [
      "https://images.uzum.uz/d188rvi7s4fup34aa1vg/original.jpg",
    ],
    description: "Futbol butsilar erkaklar uchun, o'lcham 40-45",
    category: "Futbol",
  },
  {
    id: "35",
    name: "Futbol formasi",
    price: 400,
    images: [
      "https://images.uzum.uz/d1rlehnnrko24u2h3msg/original.jpg",
    ],
    description: "Futbol formasi, erkaklar va o'smirlar uchun, turli o'lchamlar.",
    category: "Futbol",
  },
  {
    id: "36",
    name: "Futbol retro-forma",
    price: 410,
    images: [
      "https://images.uzum.uz/d5p6gu3q345softls8r0/original.jpg",
    ],
    description: "Futbol retro-forma - Barcelona 2015, Sport kiyim",
    category: "Futbol",
  },
  {
    id: "37",
    name: "Futbol to'pi Molten",
    price: 430,
    images: [
      "https://images.uzum.uz/d5vi6n6f4hvsl3r26nkg/original.jpg",
    ],
    description: "Futbol to'pi Molten, AFC F5A5000-AC, o'lcham 5",
    category: "Futbol",
  },
  {
    id: "38",
    name: "Jamoa uchun futbol formasi",
    price: 750,
    images: [
      "https://images.uzum.uz/d1v8k3j4a9q7t0h8w3kr/original.jpg",
    ],
    description: "Jamoaviy o'yinlar uchun futbol formasi to'plami.",
    category: "Futbol",
  },

  // === AKSESSUARLAR ===
  {
    id: "39",
    name: "Voleybol to'pi",
    price: 420,
    images: [
      "https://images.uzum.uz/d2r9dtaf3g4j9050k6kg/original.jpg",
    ],
    description: "Yuqori sifatli voleybol to'pi, o'quvchilar va sport jamoalari uchun.",
    category: "Aksessuarlar",
  },
  {
    id: "40",
    name: "Powerbank 10000mAh",
    price: 434,
    images: [
      "https://images.uzum.uz/d5sbql7iub393sddpemg/original.jpg",
    ],
    description: "Portativ quvvatlash qurilmasi. 10000mAh, 2ta USB port.",
    category: "Aksessuarlar",
  },
  {
    id: "41",
    name: "Laptop Sumkasi 15.6'",
    price: 270,
    images: [
      "https://images.uzum.uz/d5obpn3q345softlgvl0/original.jpg",
      "https://images.uzum.uz/d5obpn3q345softlgvl0/original.jpg",
    ],
    description: "Himoyalangan noutbuk biznes sumkasi.",
    category: "Aksessuarlar",
  },
  {
    id: "42",
    name: "Laptop Stendi Aluminium",
    price: 178,
    images: [
      "https://images.uzum.uz/cs6jbmmfh2vj1qtkbjcg/original.jpg",
    ],
    description: "Noutbuk va planshet ushlagichi, alyuminiy.",
    category: "Aksessuarlar",
  },
  {
    id: "43",
    name: "Mouse Pad XXL 80x30",
    price: 200,
    images: [
      "https://images.uzum.uz/d5ofiurq345softlj3jg/original.jpg",
    ],
    description: "Katta o'lchamli geymer kovrik 40×90 sm – klaviatura va sichqoncha uchun, sirpanmas.",
    category: "Aksessuarlar",
  },
  {
    id: "44",
    name: "USB Hub 4-port 3.0",
    price: 124,
    images: [
      "https://images.uzum.uz/d29dgs34eu2ok7138rng/original.jpg",
    ],
    description: "USB Hub 4 ta portli USB 3.0 razvetvitel – 5 Gbit/s tezlik, kompyuter uchun",
    category: "Aksessuarlar",
  },
  {
    id: "45",
    name: "Kabel Tartiblagich (Organizer)",
    price: 150,
    images: [
      "https://images.uzum.uz/cf631tov1htd23al8eg0/original.jpg",
      "https://images.uzum.uz/cf63340l08k0o9qi66f0/original.jpg"
    ],
    description: "Kabellarni tartibga keltiruvchi. Ish stolini toza saqlang.",
    category: "Aksessuarlar",
  },
  {
    id: "46",
    name: "Bloknotlar",
    price: 90,
    images: [
      "https://images.uzum.uz/d4s9pl03l2fl230hrdto/original.jpg",
    ],
    description: "Yozuv va eslatmalar uchun chiroyli bloknotlar to'plami.",
    category: "Aksessuarlar",
  },
  {
    id: "47",
    name: "Kitob uchun podstavka (stend)",
    price: 150,
    images: [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
    ],
    description: "Kitobni qulay o'qish uchun metall stend.",
    category: "Aksessuarlar",
  },
  {
    id: "48",
    name: "Telefon g'ilofi (chexol)",
    price: 110,
    images: [
      "https://images.uzum.uz/d1u0k1t5tksjt0qv5r1g/original.jpg",
    ],
    description: "Smartfon uchun himoyalovchi g'ilof. Kundalik foydalanish uchun ideal.",
    category: "Aksessuarlar",
  },
  {
    id: "49",
    name: "Qo'l brasletlari",
    price: 130,
    images: [
      "https://images.unsplash.com/photo-1512464141031-d8e1e5d6026f?w=400",
    ],
    description: "Zamonaviy qo'l brasletlari, sovg'a va aksessuar sifatida.",
    category: "Aksessuarlar",
  },
  {
    id: "50",
    name: "Qizlar uchun sumkalar",
    price: 250,
    images: [
      "https://images.uzum.uz/d0q8k9j3m6gd7t1dr5nr/original.jpg",
    ],
    description: "Kichik va shinam qizlar uchun sumkalar. Kundalik foydalanish uchun.",
    category: "Aksessuarlar",
  },
  {
    id: "51",
    name: "Barsetka",
    price: 190,
    images: [
      "https://images.uzum.uz/d4s9o1j3m2el77xw0p8j/original.jpg",
    ],
    description: "Erkaklar uchun barsetka. Hujjat va telefon saqlash uchun.",
    category: "Aksessuarlar",
  },
  {
    id: "52",
    name: "Daftar va ruchkalar",
    price: 140,
    images: [
      "https://images.uzum.uz/d5h9k3a4l1eo7sz0wp8o/original.jpg",
    ],
    description: "Yozuv va dars uchun daftar hamda ruchkalar to'plami.",
    category: "Aksessuarlar",
  },
  {
    id: "53",
    name: "Kino biletlari to'plami",
    price: 120,
    images: [
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=400",
    ],
    description: "Kino seansi uchun 2 ta chipta. Do'stlar bilan dam olish uchun ideal.",
    category: "Aksessuarlar",
  },
  {
    id: "54",
    name: "Mini Backpack",
    price: 220,
    images: [
      "https://images.unsplash.com/photo-1523381212171-cd323b4609d4?w=400",
    ],
    description: "Kichik va shinam mini ortopark. Kundalik foydalanish uchun ideal.",
    category: "Aksessuarlar",
  },
  {
    id: "55",
    name: "Cute Mini Backpack",
    price: 240,
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400",
    ],
    description: "Chiroyli va qulay mini sumka. Qizlar uchun juda mos.",
    category: "Aksessuarlar",
  },
  {
    id: "56",
    name: "Fashion Backpack",
    price: 310,
    images: [
      "https://images.unsplash.com/photo-1495121605193-b116b5b9c5d1?w=400",
    ],
    description: "Moda uslubidagi sport sumka. Ko'cha ko'rinishiga mos.",
    category: "Aksessuarlar",
  },
  {
    id: "57",
    name: "School Backpack",
    price: 280,
    images: [
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=400",
    ],
    description: "Maktab uchun amaliy ryukzak, kitoblar va daftarlar sig'adi.",
    category: "Aksessuarlar",
  },
  {
    id: "58",
    name: "Casual Backpack",
    price: 260,
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400",
    ],
    description: "Kundalik foydalanish uchun oddiy va qulay ortopark.",
    category: "Aksessuarlar",
  },
  {
    id: "59",
    name: "Simple Backpack",
    price: 230,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400",
    ],
    description: "Soddalashtirilgan dizaynli sumka. Har kuni foydalanish uchun.",
    category: "Aksessuarlar",
  },
  {
    id: "60",
    name: "Korean Style Backpack",
    price: 330,
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
    ],
    description: "Koreys uslubidagi moda ortopark. Yaxshi ko'rinish va sifat.",
    category: "Aksessuarlar",
  },
  {
    id: "61",
    name: "Harajuku Backpack",
    price: 350,
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
    ],
    description: "Harajuku uslubidagi yorqin va original ortopark.",
    category: "Aksessuarlar",
  },
  {
    id: "62",
    name: "Crossbody Bag",
    price: 210,
    images: [
      "https://images.unsplash.com/photo-1490335903770-2f7d745c1a70?w=400",
    ],
    description: "Tasmasi bilan yelkaga osiladigan zamonaviy crossbody sumka.",
    category: "Aksessuarlar",
  },
  {
    id: "63",
    name: "Mini Crossbody Bag",
    price: 190,
    images: [
      "https://images.unsplash.com/photo-1513346940224-8e23c4b7e9b4?w=400",
    ],
    description: "Kichik crossbody sumka, telefon va hamyon uchun.",
    category: "Aksessuarlar",
  },
  {
    id: "64",
    name: "Chain Crossbody Bag",
    price: 270,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400",
    ],
    description: "Zanjirli tasmasi bilan elegant crossbody sumka.",
    category: "Aksessuarlar",
  },
  {
    id: "65",
    name: "Shoulder Bag",
    price: 260,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    ],
    description: "Yelka uchun klassik sumka. Kundalik va ish uchun ideal.",
    category: "Aksessuarlar",
  },
  {
    id: "66",
    name: "Classic Shoulder Bag",
    price: 290,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400",
    ],
    description: "Klassik yelka sumkasi. Oddiy dizayn va sifatli material.",
    category: "Aksessuarlar",
  },
  {
    id: "67",
    name: "Mini proyektor",
    price: 1200,
    images: [
      "https://images.uzum.uz/d5s7k3j8q1a4t6c0v8yr/original.jpg",
    ],
    description: "Uy va ta'lim uchun mini proyektor. Kino, dars va taqdimotlar uchun.",
    category: "Aksessuarlar",
  },

  // === TO'PLAMLAR ===
  {
    id: "68",
    name: "Laptop Full Set (Sumka+Mouse+Pad)",
    price: 300,
    images: [
      "https://images.uzum.uz/d5fpq6gjsv1neactfc90/original.jpg",
      "https://images.uzum.uz/d44higlv2sjo4rvgb5kg/original.jpg",
    ],
    description: "Laptop uchun to'liq to'plam: sumka, sichqoncha, mouse pad.",
    category: "To'plamlar",
  },
  {
    id: "69",
    name: "AIRMESH G2 BLACK",
    price: 2330,
    images: [
      "https://images.uzum.uz/d39p4sq1146g78h3e99g/original.jpg",
    ],
    description: "AIRMESH G2 BLACK – bu zamonaviy va yengil qurilma bo'lib, foydalanuvchiga qulaylik va ishonchlilikni taqdim etadi.",
    category: "To'plamlar",
  },
  {
    id: "70",
    name: "Noutbuk sovutgichi NCP-063",
    price: 445,
    images: [
      "https://images.uzum.uz/d1vqf1t2llnbjcofdddg/original.jpg",
    ],
    description: "Noutbuk sovutgichi NCP-063 – bu zamonaviy va yengil qurilma bo'lib, foydalanuvchiga qulaylik va ishonchlilikni taqdim etadi.",
    category: "To'plamlar",
  },
  {
    id: "71",
    name: "Kanselyariya mahsulotlari to'plami (Box)",
    price: 380,
    images: [
      "https://images.uzum.uz/d4e2hk3j6fmj7n2cc8rg/original.jpg",
    ],
    description: "Qalam, daftarcha, bloknot va boshqa kanselyariya mahsulotlaridan iborat to'plam.",
    category: "To'plamlar",
  },
  {
    id: "72",
    name: "Badminton to'plami",
    price: 520,
    images: [
      "https://images.unsplash.com/photo-1576001709533-7df5f08f1a56?w=400",
    ],
    description: "Badminton raketkasi va volanlardan iborat sport to'plami.",
    category: "To'plamlar",
  },
  {
    id: "73",
    name: "Dayson",
    price: 500,
    images: [
      "https://images.uzum.uz/d6c0537qkmal07p15ntg/original.jpg"
    ],
    description: "Dayson soch quritgich-stayler 5 tasi 1 da, barcha soch turlari uchun, ployka",
    category: "To'plamlar",
  },
];
