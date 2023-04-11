const express = require('express');
const { loginController } = require('./controller');
const { validateEmail, validateLogin } = require('./middlewares/loginValidat');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validateLogin, validateEmail, loginController.Login);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
