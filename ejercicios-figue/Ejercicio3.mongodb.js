use('examen_23_24')

// Obtener array de documentos que pertenecen al cliente y mapear al campo `total_price`
var cust = 'cust_002'
var total = 0
var cant = 0
var cursor = db.orders.find({ customer_id: cust }).forEach(order =>{
    total += order.total_price
    cant++
})

total = total/cant
print("Average total price for " + cust + ": " + total)