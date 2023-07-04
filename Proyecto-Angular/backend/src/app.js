const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express();


app.set('port', process.env.PORT || 4000);

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/products", require('./routes/products.routes.js'))
app.use("/api/lineItem", require('./routes/lineItem.routes.js'))
app.use("/api/orders", require('./routes/orders.routes.js'))
app.use("/api/customers", require('./routes/customers.routes.js'))
app.use("/api/registers", require('./routes/register.routes.js'))



module.exports= app;