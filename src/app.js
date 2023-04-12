const express = require('express');
const { loginController } = require('./controller');
const routerUser = require('./routers/user.router');
const routerCategories = require('./routers/categories.router');
const routerPost = require('./routers/post.router');
const { validateEmail, validateLogin } = require('./middlewares/loginValidat');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/user', routerUser);
app.use('/categories', routerCategories);
app.use('/post', routerPost);

app.post('/login', validateLogin, validateEmail, loginController.Login);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
