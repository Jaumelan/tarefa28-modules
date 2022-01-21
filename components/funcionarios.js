const database = require("../database.js");

module.exports = function funcionarios(setor) {
    const funcionarios = database.filter(user => {
        if (user.sector === setor) {
            return user
        }
    });
    return funcionarios
}



 