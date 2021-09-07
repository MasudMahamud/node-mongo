const express = require('express');


const app = express();

const users = ['Deny', 'Rahim Uddin', 'Karim Uddin', 'Susmita', 'Suborna', 'Samiha', 'Sakib']

// app.get('/', (req, res) => {
//     res.send('Thanks for using node.js')
// })

app.get('/users/:id', (req, res) =>{
   
    const userId = req.params.id;
    const name = users[userId];
    res.send({userId, name})
})

app.listen(5000, ()=>console.log('listening to port 5000'))