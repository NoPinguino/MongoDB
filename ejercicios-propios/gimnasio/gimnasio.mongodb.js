use("gimnasio")

db.clases.aggregate([
    {
        $match: {
            "horarios": {
                $elemMatch: {"dia": "Lunes"}
            }
        }
    },{
        $project: {
            "_id": 0,
            "nombre": 1,
            "horarios": 1,
        }
    }
])