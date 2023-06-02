const { Country, Activity } = require('../db');

const findByName = async (name)=>{
    console.log(name);
    let resultado = await Country.findByPk(name);
    console.log(name);
    return resultado
};

module.exports = findByName