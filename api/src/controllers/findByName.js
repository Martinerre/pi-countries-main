const { Country } = require('../db');

const findByName = async (name) => {
    console.log('controler OK');

    let resultado = await Country.findByPk(name);
    if (Country === null) console.log('Not found!');

    // let resultado = await Countries.findByPk(name);
    console.log(resultado); //null
    return resultado
};

module.exports = findByName