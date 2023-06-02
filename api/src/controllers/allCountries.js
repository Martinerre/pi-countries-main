const { Country, Activity } = require('../db');

const findAllCountries = async (query) => {
    console.log('findAllCountries');
    const countries = await Country.findAll(
        {
            where: query,
            include: {
                model: Activity,
                attributes: ['name','difficulty','season'],
                through: {attributes:[]}
            }
        }
    );
    return countries
};

module.exports = findAllCountries