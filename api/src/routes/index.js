const { Router } = require('express');
const findAllCountries = require('../controllers/allCountries');
const findByName = require('../controllers/findByName');
const createActivity = require('../controllers/createActivity');
const findAllActivities = require('../controllers/findAllActivity')
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

router.get('/countries/:name', async (req, res) => {
    let { name } = req.params;
    console.log('ruta OK');
    try {
        let nombrePais = await findByName( name );
        res.status(200).json(nombrePais)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

router.post('/activities', async (req, res) => {
    console.log('ruta OK');
    try {
        let {name,difficulty,season} = req.body;
        let newActividad = await createActivity(name, difficulty, season);
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
