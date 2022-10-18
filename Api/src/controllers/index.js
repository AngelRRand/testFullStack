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
        let getInfo = await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/test6.csv`, { headers: { "Authorization": "Bearer aSuperSecretKey" } });
        let remplace = getInfo.data.split(',')
        let edit = remplace.map(a => a.replace("\n", "-"))
        let horror = edit.map(a => a.split('-'))
        let stopPliz = horror.map(a => {
            if(a.length > 1){
                return a.slice(0, 2)
            }
            return a
        })
        resultFlat = stopPliz.flat()
        let finalresult = {
            file: resultFlat[6],
            lines: [
                {
                    text: resultFlat.find((f, i) => i>6 && f.match(/[a-zÀ-Ü]/i)),
                    number: resultFlat.find((f, i)=> f.match('[0-9-]+$')),
                    hex: resultFlat.find((f, i) => f.match(/^[a-zA-Z0-9]{32}$/g) )
                }
            ] 
        }
        console.log(finalresult, 'AAAAAAAAAAAAAAAAAAAAA')
        return getInfo.data
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getApiFiles, getFiles};