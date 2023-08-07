const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const userName = req.body.name;
    const userExists = users.some(user => user.name === userName);
    
    if (userExists) {
      return res.status(400).send("O usuário já existe!");
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = { name: userName, password: hashedPassword };
      
      users.push(user);
      res.status(201).send("Usuário cadastrado com sucesso!");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/users/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  if (!user) {
    return res.status(400).send("Não foi encontrado o usuario");
  }

  try {
    const password = await bcrypt.compare(req.body.password, user.password)
    if (password) {
      res.send("Login feito com sucesso");
    } else {
      res.send("Senha incorreta");
    }
  } catch {
    res.status(500).send();
  }
});

app.listen(8080);
