use('examen_23_24')

db.orders.aggregate([
  {
    $match: {
      _id: "order_007"  // Filtra por el ID específico
    }
  },
  {
    $project: {
      _id: 1,
      totalItems: {
        $sum: "$items.quantity"
      }
    }
  }
])