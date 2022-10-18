const { Router } = require('express');
const router = Router();
const {getApiFiles, getFiles} = require('../controllers');
router.get('/', async (req, res) =>{
    req.header('Authorization')
    const apiInfo = await getFiles()
    console.log(apiInfo, 'clg router')
    res.send('todo bien')
})


module.exports = router;