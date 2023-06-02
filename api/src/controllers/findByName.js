const { Country, Activity } = require('../db');

const findByName = async (name) => {
    console.log('controler OK');
    let resultado = await Country.findByPk(name);
    console.log(resultado); //null
    return resultado
};

module.exports = findByName