const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send('Thanks for using node.js')
})

app.listen(5000, ()=>console.log('listening'))