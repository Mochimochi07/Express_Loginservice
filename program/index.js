const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const users = {
  'user1': {
    'password': 'password1'
  },
  'user2': {
    'password': 'password2'
  }
};


app.post('/login', (req, res) => {
  const { username, password } = req.body;


  if (username in users && users[username].password === password) {
    res.send({ message: 'Login successful' });
  } else {
    res.status(401).send({ error: 'Invalid username or password' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
