const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
    // eslint-disable-line consistent-return
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

app.get('/', (req, res) => {
        res.status(200).json({ name: 'Alice' })
    }
);

let users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'}
    ];

app.get('/hi', (req, res) => {
        res.status(200).json({ users: users})
    }
);

app.post('/hi', (req, res) => {
        const user = req.body;
        users.push(user);
        res.status(200).json({ users: users, m: 'POST'})
    }
);

app.put('/hi', (req, res) => {
        res.status(200).json({ users: users, m: 'PUT'})
    }
);

app.patch('/hi', (req, res) => {
        res.status(200).json({ users: users, m: 'PATCH'})
    }
);

app.delete('/hi', (req, res) => {
        const id = req.body.id;
        users = users.filter(el => el.id !== id);
        res.status(200).json({ users: users, m: 'DELETE'})
    }
);

app.post('/', (req, res) => {
    setTimeout(
        () => res.status(200).json({ message: 'Hello ' + req.body.name }),
        4000
    )
});

app.listen(PORT, () => console.log('SERVER WORKS'));