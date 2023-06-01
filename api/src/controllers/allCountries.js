const { query } = require('express');
const { Countries } = require('../db');

const findAllCountries = async (query) => {
    console.log('findAllCountries');
    const countries = await Countries.findAll(
        {
            where: query,
            include: {
                model: Countries,
                attributes: ['name'],
            }
        }
    );
    return countries
};

module.exports= findAllCountries