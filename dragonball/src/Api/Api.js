export const Api = {

    baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',

    authorization: 'marcos_domingues@hotmail.com',

    readAllUrl: () => Api.baseUrl + '/',
    readSingleUrl: id => Api.baseUrl + '/' + id,
    createUrl: () => Api.baseUrl + '/',
    updateUrl: id => Api.baseUrl + '/' + id,
    deleteAllUrl: () => Api.baseUrl + '/',
    deleteUrl: id => Api.baseUrl + '/' + id,

    //pegar tudo
    buildApiGetRequest: url => {
        return fetch(url, {
            method: 'GET',
            headers: new Headers({
                Authorization: Api.authorization,

            })
        })
    },


    buildApiPostRequest: (url, body) => {
        return fetch(url, {
            method: 'POST',
            //a cada requisição, o Header pode mudar, por isto precisa instanciar novamente o objeto (new Header)
            headers: new Headers({
                Authorization: Api.authorization,
                //por padrão, usamos esse atributo do Headers content-type pra falar que vamos mandar um json 
                'Content-type': 'application/json'
            }),
            //stringify transforma um JSON numa linha só
            body: JSON.stringify(body)
        })
    },


    //Alterar um item
    buildApiPutRequest: (url, body) => {
        return fetch(url, {
            method: 'PUT',
            //a cada requisição, o Header pode mudar, por isto precisa instanciar novamente o objeto (new Header)
            headers: new Headers({
                Authorization: Api.authorization,
                //por padrão, usamos esse atributo do Headers content-type pra falar que vamos mandar um json 
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
            headers: new Headers({
                Authorization: Api.authorization
            })
        })
    }

}