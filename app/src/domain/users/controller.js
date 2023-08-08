const globalUsers = [];
const crypto = require('../../../middlewares/cryptoPass');

exports.getAllUsers = (req, res) => {
    res.json(globalUsers);
}

exports.addUsers = (req, res) => {
    const { name, password} = req.body
    
    try {
        const userName = name;
        const userExists = globalUsers.some(user => user.name === userName);

        if (userExists) {
            return res.status(406).json({ error: "Usuário já existe!" });
        }

        const hashedPassword = crypto.generate(password)
        const newUser = { name: userName, password: hashedPassword };
        globalUsers.push(newUser);

        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
        } catch (error) {
            res.status(500).json({ error: error.message });
            
    }
}

exports.autenticationUser = (req, res) => {
    const { name, password} = req.body

  try {
    const user = globalUsers.find(user => user.name === name);

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    
    const passwordMatch = crypto.decrypt(password, user.password)

    if (!passwordMatch) {
      res.status(401).json({ error: "Senha incorreta" });
    }

    res.json({ message: "Login feito com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}