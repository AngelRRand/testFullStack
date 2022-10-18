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

const getFiles = async (test) => {
    try {
        let getInfo = await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${test}`, { headers: { "Authorization": "Bearer aSuperSecretKey" } });
        console.log(getInfo.data, 'WEEEEEEEEEEEEEEEEEEEEEEEEE')
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
        if(resultFlat[5] === undefined){
            throw new Error
        }
        let finalresult = {
            file: test,
            lines: [
                {
                    text: resultFlat.find((f, i) => i>6 && f.match(/[a-zÀ-Ü]/i) && f != test),
                    number: resultFlat.find((f, i)=> f.match('[0-9-]+$')),
                    hex: resultFlat.find((f, i) => f.match(/^[a-zA-Z0-9]{32}$/g) )
                }
            ] 
        }
        return finalresult
    } catch (error) {
        console.log('HOT')
    }
}

module.exports = {getApiFiles, getFiles};