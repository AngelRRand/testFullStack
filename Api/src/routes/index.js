const { Router } = require('express');
const router = Router();
const getFiles = require('../controllers');
router.get('/', async (req, res) =>{
    req.header('Authorization')
    const apiGet = await axios.get("https://echo-serv.tbxnet.com/v1/secret/files", { headers: {"Authorization" : "Bearer aSuperSecretKey"} });
    
    console.log(apiInfo)
    res.send('todo bien')
})


module.exports = router;