const { Country } = require('../db');
const { Op } = require("sequelize");

const findByName = async (name) => {
    // console.log('controler name OK');
    // console.log('controler ' + name);
    let resultado = await Country.findAll({ where: { name: { [Op.substring]: name } } })
    if (resultado.length === 0) return ('Not found!');
    return resultado
};

module.exports = findByName