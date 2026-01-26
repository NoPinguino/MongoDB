// Conectar a la base de datos
use('examen_23_24')

// Eliminar la colección si existe (opcional)
db.books.drop()

// Insertar los documentos en la colección books
db.books.insertMany([
  {
    "_id": "book_001",
    "title": "The Lord of the Rings",
    "author": {
      "name": "J.R.R. Tolkien",
      "nationality": "British",
      "birth_year": 1892,
      "death_year": 1973
    },
    "isbn": "978-0544003415",
    "pages": 1178,
    "language": "English",
    "publisher": "Houghton Mifflin",
    "publication_year": 1954,
    "genres": ["Fantasy", "Adventure", "Epic"],
    "price": 29.99,
    "stock": 85,
    "rating": {
      "average": 4.8,
      "count": 15234
    },
    "reviews": [
      {
        "user": "reader_001",
        "score": 5,
        "comment": "A masterpiece of fantasy literature"
      },
      {
        "user": "reader_002",
        "score": 5,
        "comment": "Epic and timeless"
      }
    ],
    "awards": ["International Fantasy Award", "Prometheus Hall of Fame Award"],
    "series": {
      "name": "The Lord of the Rings",
      "number": 1
    },
    "in_stock": true,
    "format": ["Hardcover", "Paperback", "eBook", "Audiobook"]
  },
  {
    "_id": "book_002",
    "title": "1984",
    "author": {
      "name": "George Orwell",
      "nationality": "British",
      "birth_year": 1903,
      "death_year": 1950
    },
    "isbn": "978-0451524935",
    "pages": 328,
    "language": "English",
    "publisher": "Signet Classic",
    "publication_year": 1949,
    "genres": ["Dystopian", "Science Fiction", "Political Fiction"],
    "price": 15.99,
    "stock": 120,
    "rating": {
      "average": 4.7,
      "count": 8965
    },
    "reviews": [
      {
        "user": "reader_003",
        "score": 5,
        "comment": "Terrifyingly relevant today"
      },
      {
        "user": "reader_004",
        "score": 4,
        "comment": "A must-read classic"
      }
    ],
    "awards": ["Prometheus Hall of Fame Award"],
    "in_stock": true,
    "format": ["Paperback", "eBook", "Audiobook"]
  },
  {
    "_id": "book_003",
    "title": "To Kill a Mockingbird",
    "author": {
      "name": "Harper Lee",
      "nationality": "American",
      "birth_year": 1926,
      "death_year": 2016
    },
    "isbn": "978-0061120084",
    "pages": 324,
    "language": "English",
    "publisher": "Harper Perennial",
    "publication_year": 1960,
    "genres": ["Fiction", "Classic", "Historical"],
    "price": 18.99,
    "stock": 95,
    "rating": {
      "average": 4.6,
      "count": 12450
    },
    "reviews": [
      {
        "user": "reader_005",
        "score": 5,
        "comment": "Powerful and moving"
      }
    ],
    "awards": ["Pulitzer Prize for Fiction", "Presidential Medal of Freedom"],
    "in_stock": true,
    "format": ["Hardcover", "Paperback", "eBook"]
  },
  {
    "_id": "book_004",
    "title": "The Great Gatsby",
    "author": {
      "name": "F. Scott Fitzgerald",
      "nationality": "American",
      "birth_year": 1896,
      "death_year": 1940
    },
    "isbn": "978-0743273565",
    "pages": 180,
    "language": "English",
    "publisher": "Scribner",
    "publication_year": 1925,
    "genres": ["Fiction", "Classic", "Romance"],
    "price": 14.99,
    "stock": 110,
    "rating": {
      "average": 4.4,
      "count": 9823
    },
    "reviews": [
      {
        "user": "reader_006",
        "score": 4,
        "comment": "Beautiful prose"
      },
      {
        "user": "reader_007",
        "score": 5,
        "comment": "Captures the Jazz Age perfectly"
      }
    ],
    "awards": ["Modern Library's Top 100"],
    "in_stock": true,
    "format": ["Paperback", "eBook", "Audiobook"]
  },
  {
    "_id": "book_005",
    "title": "Pride and Prejudice",
    "author": {
      "name": "Jane Austen",
      "nationality": "British",
      "birth_year": 1775,
      "death_year": 1817
    },
    "isbn": "978-0141439518",
    "pages": 432,
    "language": "English",
    "publisher": "Penguin Classics",
    "publication_year": 1813,
    "genres": ["Romance", "Classic", "Fiction"],
    "price": 12.99,
    "stock": 140,
    "rating": {
      "average": 4.7,
      "count": 11567
    },
    "reviews": [
      {
        "user": "reader_008",
        "score": 5,
        "comment": "Witty and romantic"
      }
    ],
    "awards": ["BBC Big Read"],
    "in_stock": true,
    "format": ["Paperback", "eBook", "Audiobook"]
  },
  {
    "_id": "book_006",
    "title": "The Catcher in the Rye",
    "author": {
      "name": "J.D. Salinger",
      "nationality": "American",
      "birth_year": 1919,
      "death_year": 2010
    },
    "isbn": "978-0316769174",
    "pages": 234,
    "language": "English",
    "publisher": "Little, Brown and Company",
    "publication_year": 1951,
    "genres": ["Fiction", "Coming-of-age", "Classic"],
    "price": 16.99,
    "stock": 75,
    "rating": {
      "average": 4.2,
      "count": 7845
    },
    "reviews": [
      {
        "user": "reader_009",
        "score": 4,
        "comment": "Authentic teenage voice"
      },
      {
        "user": "reader_010",
        "score": 3,
        "comment": "Interesting but controversial"
      }
    ],
    "awards": ["Modern Library's Top 100"],
    "in_stock": true,
    "format": ["Paperback", "eBook"]
  },
  {
    "_id": "book_007",
    "title": "Harry Potter and the Philosopher's Stone",
    "author": {
      "name": "J.K. Rowling",
      "nationality": "British",
      "birth_year": 1965,
      "death_year": null
    },
    "isbn": "978-0439708180",
    "pages": 309,
    "language": "English",
    "publisher": "Scholastic",
    "publication_year": 1997,
    "genres": ["Fantasy", "Young Adult", "Adventure"],
    "price": 24.99,
    "stock": 200,
    "rating": {
      "average": 4.9,
      "count": 18923
    },
    "reviews": [
      {
        "user": "reader_011",
        "score": 5,
        "comment": "Magical and enchanting"
      },
      {
        "user": "reader_012",
        "score": 5,
        "comment": "Perfect for all ages"
      }
    ],
    "awards": ["British Book Award", "Nestlé Smarties Book Prize"],
    "series": {
      "name": "Harry Potter",
      "number": 1
    },
    "in_stock": true,
    "format": ["Hardcover", "Paperback", "eBook", "Audiobook"]
  },
  {
    "_id": "book_008",
    "title": "The Hobbit",
    "author": {
      "name": "J.R.R. Tolkien",
      "nationality": "British",
      "birth_year": 1892,
      "death_year": 1973
    },
    "isbn": "978-0547928227",
    "pages": 310,
    "language": "English",
    "publisher": "Houghton Mifflin",
    "publication_year": 1937,
    "genres": ["Fantasy", "Adventure", "Children's Literature"],
    "price": 19.99,
    "stock": 130,
    "rating": {
      "average": 4.7,
      "count": 13245
    },
    "reviews": [
      {
        "user": "reader_013",
        "score": 5,
        "comment": "A delightful adventure"
      }
    ],
    "awards": ["Carnegie Medal nominee"],
    "series": {
      "name": "Middle-earth",
      "number": 0
    },
    "in_stock": true,
    "format": ["Hardcover", "Paperback", "eBook", "Audiobook"]
  },
  {
    "_id": "book_009",
    "title": "One Hundred Years of Solitude",
    "author": {
      "name": "Gabriel García Márquez",
      "nationality": "Colombian",
      "birth_year": 1927,
      "death_year": 2014
    },
    "isbn": "978-0060883287",
    "pages": 417,
    "language": "Spanish",
    "publisher": "Harper Perennial",
    "publication_year": 1967,
    "genres": ["Magical Realism", "Fiction", "Classic"],
    "price": 22.99,
    "stock": 60,
    "rating": {
      "average": 4.5,
      "count": 6734
    },
    "reviews": [
      {
        "user": "reader_014",
        "score": 5,
        "comment": "A masterpiece of magical realism"
      }
    ],
    "awards": ["Nobel Prize in Literature contributor"],
    "in_stock": true,
    "format": ["Paperback", "eBook"]
  },
  {
    "_id": "book_010",
    "title": "The Chronicles of Narnia",
    "author": {
      "name": "C.S. Lewis",
      "nationality": "British",
      "birth_year": 1898,
      "death_year": 1963
    },
    "isbn": "978-0066238500",
    "pages": 767,
    "language": "English",
    "publisher": "HarperCollins",
    "publication_year": 1950,
    "genres": ["Fantasy", "Children's Literature", "Christian Literature"],
    "price": 35.99,
    "stock": 90,
    "rating": {
      "average": 4.6,
      "count": 10234
    },
    "reviews": [
      {
        "user": "reader_015",
        "score": 5,
        "comment": "Timeless fantasy classic"
      }
    ],
    "awards": ["Carnegie Medal"],
    "series": {
      "name": "The Chronicles of Narnia",
      "number": 1
    },
    "in_stock": true,
    "format": ["Hardcover", "Paperback", "eBook", "Audiobook"]
  },
  {
    "_id": "book_011",
    "title": "Brave New World",
    "author": {
      "name": "Aldous Huxley",
      "nationality": "British",
      "birth_year": 1894,
      "death_year": 1963
    },
    "isbn": "978-0060850524",
    "pages": 268,
    "language": "English",
    "publisher": "Harper Perennial",
    "publication_year": 1932,
    "genres": ["Dystopian", "Science Fiction", "Classic"],
    "price": 17.99,
    "stock": 105,
    "rating": {
      "average": 4.3,
      "count": 8123
    },
    "reviews": [
      {
        "user": "reader_016",
        "score": 4,
        "comment": "Prophetic and disturbing"
      }
    ],
    "awards": ["Modern Library's Top 100"],
    "in_stock": true,
    "format": ["Paperback", "eBook", "Audiobook"]
  },
  {
    "_id": "book_012",
    "title": "Don Quixote",
    "author": {
      "name": "Miguel de Cervantes",
      "nationality": "Spanish",
      "birth_year": 1547,
      "death_year": 1616
    },
    "isbn": "978-0060934347",
    "pages": 1023,
    "language": "Spanish",
    "publisher": "Ecco",
    "publication_year": 1605,
    "genres": ["Classic", "Adventure", "Satire"],
    "price": 28.99,
    "stock": 45,
    "rating": {
      "average": 4.4,
      "count": 5678
    },
    "reviews": [
      {
        "user": "reader_017",
        "score": 5,
        "comment": "The first modern novel"
      }
    ],
    "awards": ["Greatest book ever written (various polls)"],
    "in_stock": true,
    "format": ["Hardcover", "Paperback", "eBook"]
  },
  {
    "_id": "book_013",
    "title": "Moby-Dick",
    "author": {
      "name": "Herman Melville",
      "nationality": "American",
      "birth_year": 1819,
      "death_year": 1891
    },
    "isbn": "978-0142437247",
    "pages": 654,
    "language": "English",
    "publisher": "Penguin Classics",
    "publication_year": 1851,
    "genres": ["Adventure", "Classic", "Fiction"],
    "price": 21.99,
    "stock": 70,
    "rating": {
      "average": 4.1,
      "count": 6234
    },
    "reviews": [
      {
        "user": "reader_018",
        "score": 4,
        "comment": "Epic tale of obsession"
      }
    ],
    "awards": ["Modern Library's Top 100"],
    "in_stock": true,
    "format": ["Paperback", "eBook", "Audiobook"]
  },
  {
    "_id": "book_014",
    "title": "The Alchemist",
    "author": {
      "name": "Paulo Coelho",
      "nationality": "Brazilian",
      "birth_year": 1947,
      "death_year": null
    },
    "isbn": "978-0062315007",
    "pages": 197,
    "language": "Portuguese",
    "publisher": "HarperOne",
    "publication_year": 1988,
    "genres": ["Fiction", "Philosophy", "Adventure"],
    "price": 16.99,
    "stock": 160,
    "rating": {
      "average": 4.5,
      "count": 14567
    },
    "reviews": [
      {
        "user": "reader_019",
        "score": 5,
        "comment": "Inspiring and philosophical"
      },
      {
        "user": "reader_020",
        "score": 4,
        "comment": "Life-changing book"
      }
    ],
    "awards": ["Corine International Award"],
    "in_stock": true,
    "format": ["Paperback", "eBook", "Audiobook"]
  },
  {
    "_id": "book_015",
    "title": "The Picture of Dorian Gray",
    "author": {
      "name": "Oscar Wilde",
      "nationality": "Irish",
      "birth_year": 1854,
      "death_year": 1900
    },
    "isbn": "978-0141439570",
    "pages": 254,
    "language": "English",
    "publisher": "Penguin Classics",
    "publication_year": 1890,
    "genres": ["Gothic", "Classic", "Philosophical Fiction"],
    "price": 13.99,
    "stock": 85,
    "rating": {
      "average": 4.5,
      "count": 7890
    },
    "reviews": [
      {
        "user": "reader_021",
        "score": 5,
        "comment": "Dark and thought-provoking"
      }
    ],
    "awards": ["BBC Big Read"],
    "in_stock": true,
    "format": ["Paperback", "eBook"]
  }
])