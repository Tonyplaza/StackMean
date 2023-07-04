const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/examen-final",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then((db) => console.log('La base de datos está conectada'))
    .catch((err) => console.error(err));
