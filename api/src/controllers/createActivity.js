const { Country, Activity } = require('../db');

const createActivity = async (name, difficulty, season) => {
    console.log('controler OK');
    let newActividad = await Activity.create({ name, difficulty, season })
    return newActividad
};

module.exports = createActivity