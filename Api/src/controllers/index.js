const axios = require('axios');


const getApiFiles = async() =>{
    const apiGet = await axios.get("https://echo-serv.tbxnet.com/v1/secret/files", { headers: {"Authorization" : "Bearer aSuperSecretKey"} });
    const apiInfo = apiGet.data.files
    return apiInfo
}

const getFiles = async()=>{
    try {
        const apiInfo = await getApiFiles()
        console.log(apiInfo)
    } catch (error) {
        console.log(error)
    }
}

module.exports = getFiles;