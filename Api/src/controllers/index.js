const axios = require('axios');


const getApiFiles = async () => {
    try {
        const apiGet = await axios.get("https://echo-serv.tbxnet.com/v1/secret/files", { headers: { "Authorization": "Bearer aSuperSecretKey" } });
        const apiInfo = apiGet.data.files
        return apiInfo
    } catch (error) {
        console.log(error)
    }

}

const getFiles = async () => {
    try {
        let getInfo = await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/test9.csv`, { headers: { "Authorization": "Bearer aSuperSecretKey" } });
        let remplace = getInfo.data.split(',')
        let edit = remplace.map(a => a.replace("\n", "-"))
        let horror = edit.map(a => a.split('-'))
        let stopPliz = horror.map(a => {
            if(a.length > 1){
                return a.slice(0, 1)
            }
            return a
        })
        resultFlat = stopPliz.flat()
        console.log(resultFlat.length, 'AAAAAAAAAAAAAAAAAAAAA')
        return getInfo.data
    } catch (error) {
        console.log('ERROR DE LOS MALOS')
    }
}

module.exports = {getApiFiles, getFiles};