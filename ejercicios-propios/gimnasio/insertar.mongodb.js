use("gimnasio")
// db.clientes.insertMany([
//     {
//         nombre: "Misael",
//         edad: 19,
//         sexo: "H",
//         clases: ["Spinning", "Boxeo"],
//         activo: true,
//         altura: 1.78,
//         peso: 72
//     },
//     {
//         nombre: "Hugo",
//         edad: 21,
//         sexo: "H",
//         clases: ["Spinning", "Yoga", "Cardio"],
//         activo: true,
//         altura: 1.82,
//         peso: 80
//     },
//     {
//         nombre: "Wassim",
//         edad: 21,
//         sexo: "H",
//         clases: ["Zumba"],
//         activo: false,
//         altura: 1.75,
//         peso: 68
//     },
//     {
//         nombre: "Laura",
//         edad: 25,
//         sexo: "M",
//         clases: ["Yoga", "Pilates"],
//         activo: true,
//         altura: 1.65,
//         peso: 58
//     },
//     {
//         nombre: "Andrea",
//         edad: 30,
//         sexo: "M",
//         clases: ["CrossFit", "Spinning"],
//         activo: false,
//         altura: 1.70,
//         peso: 65
//     },
//     {
//         nombre: "Carlos",
//         edad: 17,
//         sexo: "H",
//         clases: ["Boxeo"],
//         activo: true,
//         altura: 1.80,
//         peso: 75
//     },
//     {
//         nombre: "Sofía",
//         edad: 22,
//         sexo: "M",
//         clases: ["Zumba", "Cardio", "Yoga"],
//         activo: true,
//         altura: 1.60,
//         peso: 55
//     },
//     {
//         nombre: "David",
//         edad: 35,
//         sexo: "H",
//         clases: ["Pilates"],
//         activo: false,
//         altura: 1.76,
//         peso: 82
//     },
//     {
//         nombre: "Elena",
//         edad: 28,
//         sexo: "M",
//         clases: ["Spinning", "Cardio"],
//         activo: true,
//         altura: 1.68,
//         peso: 62
//     },
//     {
//         nombre: "Raúl",
//         edad: 40,
//         sexo: "H",
//         clases: [],
//         activo: false,
//         altura: 1.74,
//         peso: 85
//     }
// ])


db.clases.insertMany([
    {
        nombre: "Spinning",
        duracion: 45,
        intensidad: "Alta",
        activa: true,
        sala: 1,
        monitor: {
            nombre: "Carlos",
            experiencia: 5
        },
        horarios: [
            { dia: "Lunes", hora: "09:00" },
            { dia: "Miércoles", hora: "18:00" },
            { dia: "Viernes", hora: "20:00" }
        ],
        alumnos: [
            { nombre: "Misael", edad: 19 },
            { nombre: "Hugo", edad: 21 },
            { nombre: "Elena", edad: 28 }
        ]
    },
    {
        nombre: "Boxeo",
        duracion: 60,
        intensidad: "Alta",
        activa: true,
        sala: 2,
        monitor: {
            nombre: "Raúl",
            experiencia: 8
        },
        horarios: [
            { dia: "Martes", hora: "19:00" },
            { dia: "Jueves", hora: "19:00" }
        ],
        alumnos: [
            { nombre: "Hugo", edad: 21 },
            { nombre: "Carlos", edad: 17 }
        ]
    },
    {
        nombre: "Zumba",
        duracion: 50,
        intensidad: "Media",
        activa: true,
        sala: 3,
        monitor: {
            nombre: "Laura",
            experiencia: 6
        },
        horarios: [
            { dia: "Lunes", hora: "17:00" },
            { dia: "Miércoles", hora: "17:00" }
        ],
        alumnos: [
            { nombre: "Sofía", edad: 22 },
            { nombre: "Andrea", edad: 30 }
        ]
    },
    {
        nombre: "Yoga",
        duracion: 60,
        intensidad: "Baja",
        activa: true,
        sala: 4,
        monitor: {
            nombre: "Sofía",
            experiencia: 10
        },
        horarios: [
            { dia: "Martes", hora: "08:00" },
            { dia: "Jueves", hora: "08:00" }
        ],
        alumnos: [
            { nombre: "Laura", edad: 25 },
            { nombre: "Elena", edad: 28 },
            { nombre: "Raúl", edad: 40 }
        ]
    }
])
