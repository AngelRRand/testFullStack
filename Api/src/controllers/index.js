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
        const apiInfo = await getApiFiles()
        const result =  await axios.get("https://echo-serv.tbxnet.com/v1/secret/file/test6.csv", { headers: { "Authorization": "Bearer aSuperSecretKey" } });
        console.log(result, 'orl')
    } catch (error) {
        console.log(error)
    }
}

module.exports = getFiles;