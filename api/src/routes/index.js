const { Router } = require('express');
const findAllCountries = require('../controllers/allCountries');
const findByName = require('../controllers/findByName');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', async (req, res) => {
    console.log('trajo algo');
    try {
        const paises = await findAllCountries();
        res.status(200).json(paises)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

router.get('/countries/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const nombrePais = await findByName( name );
        res.status(200).json(nombrePais)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

router.post('/activities', async (req, res) => {


});
router.get('/activities', async (req, res) => {


});

module.exports = router;
