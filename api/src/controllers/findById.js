const { Country } = require('../db');

const findById = async (id) => {
    // console.log('controler id OK');
    if (id.length !== 3) return ('Id debe ser 3 letras')
    let resultado = await Country.findByPk(id.toUpperCase());
    if (resultado === null) return ('Not found!');
    return resultado
};

module.exports = findById