const database = require("../database.js");

module.exports = function birthdates(param) {
    const aniversariantes = database.filter(user => {
        let [day , month , year] = user.birthDate.split("/");
        if (month === param) {
            return user
        }
    })
    return aniversariantes
}


