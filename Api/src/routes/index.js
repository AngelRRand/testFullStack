const { Router } = require('express');
const router = Router();
const getFiles = require('../controllers');
router.get('/', async (req, res) =>{
    req.header('Authorization')
    const apiInfo = await getFiles()
    res.send('todo bien')
})


module.exports = router;