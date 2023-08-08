const bcrypt = require("bcrypt");

exports.generate = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
}

exports.decrypt = (password,pass) => {
    return bcrypt.compareSync(password,pass)
}
