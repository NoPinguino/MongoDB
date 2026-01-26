use('examen_23_24')

db.products.aggregate([{
    $group: {
      _id: '$category',
      averagePrice: {
        $avg: '$price'
      }
    }
}])