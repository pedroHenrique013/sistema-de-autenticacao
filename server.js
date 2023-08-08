const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 8080;

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
      return res.status(400).json({ error: "Usuário já existe!" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = { name: userName, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/users/login", async (req, res) => {
  const user = users.find(user => user.name === req.body.name);

  if (!user) {
    return res.status(400).json({ error: "Usuário não encontrado" });
  }

  try {
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);

    if (passwordMatch) {
      res.json({ message: "Login feito com sucesso" });
    } else {
      res.status(401).json({ error: "Senha incorreta" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
