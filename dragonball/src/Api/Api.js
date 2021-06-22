export const Api = {
    
    baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',

    authorization: 'marcos_domingues@hotmail.com',

    readAllUrl: () => Api.baseUrl + '/',
    readSingleUrl: id => Api.baseUrl + '/' + id,
    createUrl: () => Api.baseUrl + '/',
    deleteAllUrl: () => Api.baseUrl + '/',


    buildApiGetRequest: url => {
        return fetch(url, {
            method: 'GET',
            headers: new Headers ({
                Authorization: Api.authorization,

            })
        })
    },


    buildApiPostRequest: (url, body) => {
        return fetch( url,{
            method: 'POST',
            //a cada requisição, o Header pode mudar, por isto precisa instanciar novamente o objeto (new Header)
            headers: new Headers ({
                Authorization: Api.authorization,
                'Content-type': 'application/json'
            }),
            //stringify transforma um JSON numa linha só
            body: JSON.stringify(body)
        })
    },

    //nome, parametros, retorno, fetch, url, objeto
    buildApiDeleteRequest: url => {
        return fetch(url, {
            method: 'DELETE',
            headers: new Headers ({
                Authorization: Api.authorization
            })
        })
    }

}