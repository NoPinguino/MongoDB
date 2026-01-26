use('examen_23_24')

db.orders.find().sort({total_price: 1}).skip(3).limit(1)