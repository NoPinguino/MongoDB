// Conectar a la base de datos
use("examen_23_24")

// Insertar los documentos en la colección orders
// db.orders.insertMany([
//     {
//         "_id": "order_001",
//         "customer_id": "cust_001",
//         "order_date": "2024-01-15",
//         "status": "delivered",
//         "total_price": 125.50,
//         "items": [
//             {
//                 "product_id": "prod_101",
//                 "product_name": "Laptop",
//                 "quantity": 1,
//                 "unit_price": 899.99
//             },
//             {
//                 "product_id": "prod_102",
//                 "product_name": "Mouse",
//                 "quantity": 2,
//                 "unit_price": 25.00
//             }
//         ],
//         "shipping_address": {
//             "street": "Calle Mayor 123",
//             "city": "Madrid",
//             "postal_code": "28013",
//             "country": "España"
//         },
//         "payment_method": "credit_card"
//     },
//     {
//         "_id": "order_002",
//         "customer_id": "cust_002",
//         "order_date": "2024-01-18",
//         "status": "processing",
//         "total_price": 45.00,
//         "items": [
//             {
//                 "product_id": "prod_103",
//                 "product_name": "T-Shirt",
//                 "quantity": 3,
//                 "unit_price": 15.00
//             }
//         ],
//         "shipping_address": {
//             "street": "Avenida Libertad 45",
//             "city": "Barcelona",
//             "postal_code": "08001",
//             "country": "España"
//         },
//         "payment_method": "paypal"
//     },
//     {
//         "_id": "order_003",
//         "customer_id": "cust_003",
//         "order_date": "2024-01-20",
//         "status": "delivered",
//         "total_price": 89.99,
//         "items": [
//             {
//                 "product_id": "prod_104",
//                 "product_name": "Headphones",
//                 "quantity": 1,
//                 "unit_price": 89.99
//             }
//         ],
//         "shipping_address": {
//             "street": "Plaza España 7",
//             "city": "Valencia",
//             "postal_code": "46001",
//             "country": "España"
//         },
//         "payment_method": "credit_card",
//         "discount": 10.00
//     },
//     {
//         "_id": "order_004",
//         "customer_id": "cust_004",
//         "order_date": "2024-01-22",
//         "status": "shipped",
//         "total_price": 35.75,
//         "items": [
//             {
//                 "product_id": "prod_105",
//                 "product_name": "Book",
//                 "quantity": 2,
//                 "unit_price": 12.50
//             },
//             {
//                 "product_id": "prod_106",
//                 "product_name": "Bookmark",
//                 "quantity": 5,
//                 "unit_price": 2.15
//             }
//         ],
//         "shipping_address": {
//             "street": "Calle Sol 22",
//             "city": "Sevilla",
//             "postal_code": "41001",
//             "country": "España"
//         },
//         "payment_method": "bank_transfer"
//     },
//     {
//         "_id": "order_005",
//         "customer_id": "cust_002",
//         "order_date": "2024-01-25",
//         "status": "delivered",
//         "total_price": 70.00,
//         "items": [
//             {
//                 "product_id": "prod_107",
//                 "product_name": "Jeans",
//                 "quantity": 2,
//                 "unit_price": 35.00
//             }
//         ],
//         "shipping_address": {
//             "street": "Avenida Libertad 45",
//             "city": "Barcelona",
//             "postal_code": "08001",
//             "country": "España"
//         },
//         "payment_method": "credit_card"
//     },
//     {
//         "_id": "order_006",
//         "customer_id": "cust_005",
//         "order_date": "2024-01-28",
//         "status": "cancelled",
//         "total_price": 150.00,
//         "items": [
//             {
//                 "product_id": "prod_108",
//                 "product_name": "Tablet",
//                 "quantity": 1,
//                 "unit_price": 150.00
//             }
//         ],
//         "shipping_address": {
//             "street": "Paseo Gracia 100",
//             "city": "Barcelona",
//             "postal_code": "08008",
//             "country": "España"
//         },
//         "payment_method": "credit_card",
//         "cancellation_reason": "out_of_stock"
//     },
//     {
//         "_id": "order_007",
//         "customer_id": "cust_006",
//         "order_date": "2024-02-01",
//         "status": "delivered",
//         "total_price": 220.50,
//         "items": [
//             {
//                 "product_id": "prod_109",
//                 "product_name": "Smartphone",
//                 "quantity": 2,
//                 "unit_price": 99.99
//             },
//             {
//                 "product_id": "prod_110",
//                 "product_name": "Phone Case",
//                 "quantity": 3,
//                 "unit_price": 5.00
//             },
//             {
//                 "product_id": "prod_111",
//                 "product_name": "Screen Protector",
//                 "quantity": 3,
//                 "unit_price": 1.84
//             }
//         ],
//         "shipping_address": {
//             "street": "Calle Luna 88",
//             "city": "Málaga",
//             "postal_code": "29001",
//             "country": "España"
//         },
//         "payment_method": "paypal",
//         "gift_wrap": true
//     },
//     {
//         "_id": "order_008",
//         "customer_id": "cust_007",
//         "order_date": "2024-02-03",
//         "status": "processing",
//         "total_price": 55.25,
//         "items": [
//             {
//                 "product_id": "prod_112",
//                 "product_name": "Sneakers",
//                 "quantity": 1,
//                 "unit_price": 55.25
//             }
//         ],
//         "shipping_address": {
//             "street": "Ronda Norte 15",
//             "city": "Zaragoza",
//             "postal_code": "50001",
//             "country": "España"
//         },
//         "payment_method": "credit_card"
//     },
//     {
//         "_id": "order_009",
//         "customer_id": "cust_008",
//         "order_date": "2024-02-05",
//         "status": "delivered",
//         "total_price": 178.00,
//         "items": [
//             {
//                 "product_id": "prod_113",
//                 "product_name": "Camera",
//                 "quantity": 1,
//                 "unit_price": 178.00
//             }
//         ],
//         "shipping_address": {
//             "street": "Avenida Diagonal 500",
//             "city": "Barcelona",
//             "postal_code": "08006",
//             "country": "España"
//         },
//         "payment_method": "bank_transfer",
//         "express_delivery": true
//     },
//     {
//         "_id": "order_010",
//         "customer_id": "cust_009",
//         "order_date": "2024-02-08",
//         "status": "shipped",
//         "total_price": 99.99,
//         "items": [
//             {
//                 "product_id": "prod_114",
//                 "product_name": "Watch",
//                 "quantity": 1,
//                 "unit_price": 99.99
//             }
//         ],
//         "shipping_address": {
//             "street": "Calle Real 33",
//             "city": "Bilbao",
//             "postal_code": "48001",
//             "country": "España"
//         },
//         "payment_method": "credit_card"
//     }
// ])

// Verificar que los documentos se insertaron correctamente
// print("Documentos insertados:", db.orders.countDocuments())

// Mostrar todos los documentos
//db.orders.find().pretty()

//db.orders.find({}).sort({total_price: 1}).skip(3).limit(1)

// db.orders.aggregate([
//     {
//         $project: {
//             totalItems: { $sum: "$items.quantity" }
//         }
//     },
//     { $match: { totalItems: 8 } }
// ])

db.orders.aggregate([
    {
        
    },
])