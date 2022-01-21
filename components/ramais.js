const database = require('../database.js');

const databaseAlfabet = database.sort((a, b) => a.name.localeCompare(b.name));

const onlyphones = [];

databaseAlfabet.forEach(user => {
    let a = (({name, phoneExtension}) =>({name, phoneExtension}))(user)
    onlyphones.push(a);
})

module.exports = onlyphones;
