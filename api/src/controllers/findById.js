const { Country } = require('../db');

const findById = async (id) => {
    console.log('controler id OK');

    let resultado = await Country.findByPk(id);
    if (Country === null) return ('Not found!');

    // let resultado = await Countries.findByPk(name);
    console.log(resultado); //null
    return resultado
};

module.exports = findById