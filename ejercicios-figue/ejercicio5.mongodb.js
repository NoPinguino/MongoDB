use('examen_23_24')

db.books.find({'author.nationality':'British', 'pages':{$gt:250}, 'title': /The/}, {'_id':0,'title':1, 'author.name':1, 'pages':1})