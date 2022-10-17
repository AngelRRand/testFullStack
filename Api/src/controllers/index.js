const axios = require('axios');


const getFiles = async() =>{
    const apiGet = await axios.get("https://echo-serv.tbxnet.com/v1/secret/files", { headers: {"Authorization" : "Bearer aSuperSecretKey"} });
    const apiInfo = apiGet.data.files
    return apiInfo
}

const getFile = async()=>{
    try {
        const apiInfo = await getFiles()
    } catch (error) {
        console.log(error)
    }
}

module.exports = getFiles;