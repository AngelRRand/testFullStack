import axios from 'axios'


export function getAllTest() {
    return async function (dispatch) {
        try {
            var response = await axios.get('http://localhost:3001')
            return dispatch({
                type: 'GET_ALL_TEST',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }

    }
}


export function infoTest(test) {
    return async function (dispatch) {
        var response = await axios.get(`http://localhost:3001/${test}`)
        //console.log(response)
        return dispatch({
            type: 'GET_TEST',
            payload: response.data
        })
    }
}

