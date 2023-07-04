require('./database')
const app= require('./app')


app.listen(app.get('port'));
console.log('El servidor está en el puerto: ',app.get('port'));