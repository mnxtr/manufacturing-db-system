const express = require('express');
const app = express(); 
const cors = require('cors'); 
app.use(cors()); 
app.use(express.json());
const ordersRouter = require('./src/orders');
app.use('api/orders', ordersRouter);

app.listen(3000, () => { 
    console.log('Server started');

}); 
