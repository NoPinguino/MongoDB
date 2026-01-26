// Conectar a la base de datos
use('examen_23_24')

// Eliminar la colección si existe (opcional)
db.products.drop()

// Insertar los documentos en la colección products
db.products.insertMany([
  {
    "_id": "prod_101",
    "name": "Laptop Pro 15",
    "category": "Electronics",
    "price": 1299.99,
    "stock": 25,
    "brand": "TechMaster",
    "specifications": {
      "processor": "Intel i7",
      "ram": "16GB",
      "storage": "512GB SSD",
      "screen": "15.6 inches"
    },
    "tags": ["computer", "portable", "business", "gaming"],
    "ratings": [
      { "user": "user_001", "score": 5, "comment": "Excellent performance" },
      { "user": "user_002", "score": 4, "comment": "Good but expensive" }
    ],
    "release_date": "2023-06-15",
    "warranty_years": 2,
    "in_stock": true
  },
  {
    "_id": "prod_102",
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 29.99,
    "stock": 150,
    "brand": "TechMaster",
    "specifications": {
      "connectivity": "Bluetooth 5.0",
      "battery_life": "6 months",
      "dpi": "1600"
    },
    "tags": ["accessory", "wireless", "ergonomic"],
    "ratings": [
      { "user": "user_003", "score": 5, "comment": "Very comfortable" },
      { "user": "user_004", "score": 5, "comment": "Perfect for work" },
      { "user": "user_005", "score": 4, "comment": "Good value" }
    ],
    "release_date": "2023-03-10",
    "warranty_years": 1,
    "in_stock": true
  },
  {
    "_id": "prod_103",
    "name": "Cotton T-Shirt",
    "category": "Fashion",
    "price": 19.99,
    "stock": 200,
    "brand": "StyleWear",
    "specifications": {
      "material": "100% Cotton",
      "sizes": ["S", "M", "L", "XL"],
      "colors": ["white", "black", "blue", "red"]
    },
    "tags": ["clothing", "casual", "unisex"],
    "ratings": [
      { "user": "user_006", "score": 4, "comment": "Nice quality" }
    ],
    "release_date": "2024-01-05",
    "warranty_years": 0,
    "in_stock": true
  },
  {
    "_id": "prod_104",
    "name": "Noise Cancelling Headphones",
    "category": "Electronics",
    "price": 249.99,
    "stock": 45,
    "brand": "SoundWave",
    "specifications": {
      "type": "Over-ear",
      "connectivity": "Bluetooth 5.2 / Wired",
      "battery_life": "30 hours",
      "noise_cancelling": true
    },
    "tags": ["audio", "wireless", "premium", "travel"],
    "ratings": [
      { "user": "user_007", "score": 5, "comment": "Amazing sound quality" },
      { "user": "user_008", "score": 5, "comment": "Best headphones ever" }
    ],
    "release_date": "2023-09-20",
    "warranty_years": 2,
    "in_stock": true
  },
  {
    "_id": "prod_105",
    "name": "JavaScript Programming Guide",
    "category": "Books",
    "price": 45.00,
    "stock": 80,
    "brand": "TechBooks",
    "specifications": {
      "pages": 450,
      "language": "English",
      "format": "Paperback",
      "isbn": "978-1234567890"
    },
    "tags": ["programming", "education", "reference"],
    "ratings": [
      { "user": "user_009", "score": 5, "comment": "Very comprehensive" }
    ],
    "release_date": "2023-11-01",
    "warranty_years": 0,
    "in_stock": true
  },
  {
    "_id": "prod_106",
    "name": "Metal Bookmark Set",
    "category": "Stationery",
    "price": 12.99,
    "stock": 300,
    "brand": "ReadMore",
    "specifications": {
      "material": "Stainless Steel",
      "quantity": 5,
      "designs": ["flower", "geometric", "animal", "abstract", "nature"]
    },
    "tags": ["reading", "gift", "accessory"],
    "ratings": [
      { "user": "user_010", "score": 4, "comment": "Beautiful designs" },
      { "user": "user_011", "score": 5, "comment": "Perfect gift" }
    ],
    "release_date": "2023-08-15",
    "warranty_years": 0,
    "in_stock": true
  },
  {
    "_id": "prod_107",
    "name": "Denim Jeans",
    "category": "Fashion",
    "price": 89.99,
    "stock": 120,
    "brand": "StyleWear",
    "specifications": {
      "material": "Denim",
      "fit": "Slim",
      "sizes": ["28", "30", "32", "34", "36"],
      "color": "Dark Blue"
    },
    "tags": ["clothing", "denim", "casual"],
    "ratings": [
      { "user": "user_012", "score": 4, "comment": "Good fit" },
      { "user": "user_013", "score": 3, "comment": "A bit tight" }
    ],
    "release_date": "2023-12-10",
    "warranty_years": 0,
    "in_stock": true
  },
  {
    "_id": "prod_108",
    "name": "Android Tablet 10\"",
    "category": "Electronics",
    "price": 349.99,
    "stock": 60,
    "brand": "TechMaster",
    "specifications": {
      "screen_size": "10.1 inches",
      "ram": "4GB",
      "storage": "64GB",
      "battery": "7000mAh"
    },
    "tags": ["tablet", "portable", "entertainment"],
    "ratings": [
      { "user": "user_014", "score": 4, "comment": "Good for media" }
    ],
    "release_date": "2024-01-20",
    "warranty_years": 1,
    "in_stock": true
  },
  {
    "_id": "prod_109",
    "name": "Smartphone X12",
    "category": "Electronics",
    "price": 799.99,
    "stock": 35,
    "brand": "MobileTech",
    "specifications": {
      "screen": "6.5 inches OLED",
      "camera": "48MP + 12MP + 5MP",
      "ram": "8GB",
      "storage": "128GB"
    },
    "tags": ["smartphone", "5G", "camera", "flagship"],
    "ratings": [
      { "user": "user_015", "score": 5, "comment": "Incredible camera" },
      { "user": "user_016", "score": 4, "comment": "Fast and reliable" }
    ],
    "release_date": "2023-10-05",
    "warranty_years": 2,
    "in_stock": true
  },
  {
    "_id": "prod_110",
    "name": "Silicone Phone Case",
    "category": "Electronics",
    "price": 14.99,
    "stock": 250,
    "brand": "ProtectAll",
    "specifications": {
      "material": "Silicone",
      "colors": ["black", "white", "blue", "pink", "transparent"],
      "compatibility": ["Smartphone X12", "Smartphone X11"]
    },
    "tags": ["accessory", "protection", "case"],
    "ratings": [
      { "user": "user_017", "score": 4, "comment": "Good protection" }
    ],
    "release_date": "2023-10-10",
    "warranty_years": 0,
    "in_stock": true
  },
  {
    "_id": "prod_111",
    "name": "Tempered Glass Screen Protector",
    "category": "Electronics",
    "price": 9.99,
    "stock": 400,
    "brand": "ProtectAll",
    "specifications": {
      "material": "Tempered Glass",
      "thickness": "0.3mm",
      "hardness": "9H"
    },
    "tags": ["accessory", "protection", "screen"],
    "ratings": [
      { "user": "user_018", "score": 5, "comment": "Easy to install" },
      { "user": "user_019", "score": 5, "comment": "Crystal clear" }
    ],
    "release_date": "2023-09-01",
    "warranty_years": 0,
    "in_stock": true
  },
  {
    "_id": "prod_112",
    "name": "Running Sneakers",
    "category": "Fashion",
    "price": 79.99,
    "stock": 90,
    "brand": "SportFit",
    "specifications": {
      "material": "Mesh and Rubber",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["white", "black", "grey"]
    },
    "tags": ["shoes", "sports", "running"],
    "ratings": [
      { "user": "user_020", "score": 5, "comment": "Very comfortable for running" },
      { "user": "user_021", "score": 4, "comment": "Good cushioning" }
    ],
    "release_date": "2024-02-01",
    "warranty_years": 0,
    "in_stock": true
  },
  {
    "_id": "prod_113",
    "name": "Digital Camera 24MP",
    "category": "Electronics",
    "price": 549.99,
    "stock": 20,
    "brand": "PhotoPro",
    "specifications": {
      "megapixels": "24MP",
      "lens": "18-55mm",
      "video": "4K",
      "screen": "3 inches LCD"
    },
    "tags": ["camera", "photography", "video"],
    "ratings": [
      { "user": "user_022", "score": 5, "comment": "Great for beginners" }
    ],
    "release_date": "2023-07-20",
    "warranty_years": 2,
    "in_stock": true
  },
  {
    "_id": "prod_114",
    "name": "Smartwatch Pro",
    "category": "Electronics",
    "price": 299.99,
    "stock": 55,
    "brand": "TechMaster",
    "specifications": {
      "screen": "1.4 inches AMOLED",
      "battery_life": "5 days",
      "water_resistant": "50m",
      "sensors": ["heart rate", "GPS", "accelerometer"]
    },
    "tags": ["wearable", "fitness", "smartwatch"],
    "ratings": [
      { "user": "user_023", "score": 4, "comment": "Good battery life" },
      { "user": "user_024", "score": 5, "comment": "Love the fitness tracking" }
    ],
    "release_date": "2023-11-15",
    "warranty_years": 1,
    "in_stock": true
  },
  {
    "_id": "prod_115",
    "name": "Leather Jacket",
    "category": "Fashion",
    "price": 199.99,
    "stock": 40,
    "brand": "StyleWear",
    "specifications": {
      "material": "Genuine Leather",
      "sizes": ["S", "M", "L", "XL"],
      "color": "Black"
    },
    "tags": ["clothing", "jacket", "premium", "winter"],
    "ratings": [
      { "user": "user_025", "score": 5, "comment": "Excellent quality leather" }
    ],
    "release_date": "2023-10-01",
    "warranty_years": 1,
    "in_stock": true
  },
  {
    "_id": "prod_116",
    "name": "Mechanical Keyboard RGB",
    "category": "Electronics",
    "price": 129.99,
    "stock": 70,
    "brand": "TechMaster",
    "specifications": {
      "switch_type": "Cherry MX Blue",
      "connectivity": "Wired USB-C",
      "backlight": "RGB",
      "keys": 104
    },
    "tags": ["keyboard", "gaming", "mechanical", "RGB"],
    "ratings": [
      { "user": "user_026", "score": 5, "comment": "Best keyboard for typing" },
      { "user": "user_027", "score": 4, "comment": "A bit loud" }
    ],
    "release_date": "2023-08-01",
    "warranty_years": 2,
    "in_stock": true
  }
])