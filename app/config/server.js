module.exports = () => {
  const express = require("express");

  const app = express();
  const PORT = 8080;

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  const Users = require('../src/domain/users/routes');
  app.use('/users', Users);

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
