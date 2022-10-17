const { Router } = require('express');
const router = Router();

router.get('/hola', (req, res) =>{
    res.send('<h1>Hola</h1>')
})


module.exports = router;