const { Country } = require('../db');
const { Op } = require('sequelize')

const findByName = async (name) => {
    console.log('controler name OK');
    console.log('controler ' + name);

    let resultado = await Country.findAll({ where: { 'name': name } })
    if (Country === null) return ('Not found!');

    // let resultado = await Countries.findByPk(name);
    console.log(resultado); //null
    return resultado
};

module.exports = findByName