const { Activity } = require('../db');

const findAllActivities = async () => {
    console.log('controler OK');
    let actividades = await Activity.findAll()
    return actividades
};

module.exports = findAllActivities