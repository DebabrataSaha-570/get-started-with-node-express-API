const express = require('express');
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('wow I am excited to learn node and express')
})

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '0178888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnur@gmail.com', phone: '0178888889' },
    { id: 2, name: 'Srabonti', email: 'Srabonti@gmail.com', phone: '0178888882' },
    { id: 3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '0178888885' },
]

app.get('/users', (req, res) => {
    // use query parameter 
    console.log(req.query.search)
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)
    }
    else {

        res.send(users)
    }
})

// app METHOD
app.post('/users', (req, res) => {
    console.log('hitting the post ')
    req.send('inside post')
})


// dynamic api 

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    // console.log(req.params.id)
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazlil', (req, res) => {
    res.send('Yummy Yummy tok marka fazlil')
})

app.listen(port, () => {
    console.log('listening to port', port)
})
