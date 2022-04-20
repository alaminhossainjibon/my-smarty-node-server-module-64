const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hi google mamma..');
});

const users = [
    { id: 1, name: 'Mahiya Mahi', img: "img", email: 'mahiyamahi@gmail.com', phone: '017099999999' },
    { id: 2, name: 'popi', img: "img", email: 'popi@gmail.com', phone: '017099994534435' },
    { id: 3, name: 'sabnur', img: "img", email: 'sabnur@gmail.com', phone: '01709995465' },
    { id: 4, name: 'koyel', img: "img", email: 'koyel@gmail.com', phone: '0170994564564' },
    { id: 5, name: 'alia', img: "img", email: 'alia@gmail.com', phone: '017099977777' },
    { id: 6, name: 'kajal', img: "img", email: 'kajal@gmail.com', phone: '017099999897' },
    { id: 7, name: 'prayanka', img: "img", email: 'prayanka@gmail.com', phone: '01709990569705' },
];

app.get('/users', (req, res) => {
    //filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

//post data
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.listen(port, () => {
    console.log('Listening to port!!!', port);
});