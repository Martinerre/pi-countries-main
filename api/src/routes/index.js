const { Router } = require('express');
const createActivity = require('../controllers/createActivity');
const findAllCountries = require('../controllers/allCountries');
const findAllActivities = require('../controllers/findAllActivity')
const findByName = require('../controllers/findByName');
const findById = require('../controllers/findById')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', async (req, res) => {
    console.log('ruta OK');
    try {
        const paises = await findAllCountries();
        res.status(200).json(paises)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

router.get('/countries/:id', async (req, res) => {
    let { id } = req.params;
    console.log('ruta id OK');
    console.log(req.params);
    try {
        let paisId = await findById(id);
        res.status(200).json(paisId)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

router.get('/countries/name/:name', async (req, res) => {
    let { name } = req.params;
    name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log('ruta name OK');
    console.log(req.params);
    try {
        let nombrePais = await findByName(name);
        res.status(200).json(nombrePais)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

router.post('/activities', async (req, res) => {
    console.log('ruta OK');
    try {
        let { name, difficulty, duration, season } = req.body;
        let newActividad = await createActivity(name, difficulty, duration, season);
        res.status(200).json(newActividad)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

});
router.get('/activities', async (req, res) => {
    console.log('ruta OK');
    try {
        let actividad = await findAllActivities();
        res.status(200).json(actividad)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

});

module.exports = router;
