const express = require('express');
const app = express()
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('wow I am excited to learn node and express')
})


const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '0178888888' },
    { id: 1, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '0178888889' },
    { id: 2, name: 'Srabonti', email: 'Srabonti@gmail.com', phone: '0178888882' },
    { id: 3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '0178888885' },

]


app.get('/users', (req, res) => {
    // res.send('my personal Users API')
    // res.send({ id: 1, name: 'shabana', email: 'shabana@gmail.com' })
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    // console.log(req.params.id)
    res.send(user)
})

app.listen(port, () => {
    console.log('listening to port', port)
})
