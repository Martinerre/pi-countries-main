const { Router } = require('express');
const findAllCountries = require('../controllers/allCountries');
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
})

module.exports = router;
