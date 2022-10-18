const express = require('express');
const { Router } = require('express');
const router = Router();
const { getApiFiles, getFiles } = require('../controllers');

router.use(express.json())


router.get('/', async (req, res) => {

    try {
        const testsApi = await getApiFiles()
        return res.status(200).json(testsApi)
    } catch (error) {
        console.log(error)
        return res.status(400)
    }

})

router.get('/:test', async (req, res) => {
    const { test } = req.params
    try {
        const apiInfo = await getFiles(test)
        if(!apiInfo){
            return res.status(404).send('Error 404')
        }
        return res.status(200).json(apiInfo)
    } catch (error) {
        console.log(error)
        return res.status(400)
    }

})


module.exports = router;