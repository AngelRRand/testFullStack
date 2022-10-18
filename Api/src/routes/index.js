const { Router } = require('express');
const router = Router();
const { getApiFiles, getFiles } = require('../controllers');
router.get('/', async (req, res) => {

    try {
        const apiInfo = await getFiles('test9.csv')
        res.status(200).send(apiInfo)
    } catch (error) {
        console.log(error)
        res.status(400)
    }

})


module.exports = router;