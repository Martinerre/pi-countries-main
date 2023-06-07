const { Activity } = require('../db');

const findAllActivities = async () => {
    console.log('controler OK');
    let actividades = await Activity.findAll()
    if (actividades.length === 0) return ('Not found!');
    return actividades
};

module.exports = findAllActivities