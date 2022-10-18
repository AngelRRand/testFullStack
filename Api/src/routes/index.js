const express = require('express');
const { Router } = require('express');
const router = Router();
const { getApiFiles, getFiles } = require('../controllers');
router.use(express.json())


router.get('/', async (req, res) => {

    const test = req.params.test
    
    try {
        if(test){
            const apiInfo = await getFiles(test)
            return res.status(200).json(apiInfo)
        } else{
            const testsApi = await getApiFiles()
            return res.status(200).json(testsApi)
        }
    } catch (error) {
        console.log(error)
        return res.status(400)
    }

})


module.exports = router;