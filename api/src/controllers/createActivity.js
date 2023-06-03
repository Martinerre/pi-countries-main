const { Country, Activity } = require('../db');

const createActivity = async (name, difficulty, duration, season) => {
    console.log('controler OK');
    let newActividad = await Activity.create({ name, difficulty, duration, season })
    return newActividad
};

module.exports = createActivity