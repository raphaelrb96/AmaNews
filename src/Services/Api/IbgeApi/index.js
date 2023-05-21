import axios from 'axios';
const baseUrl = 'http://servicodados.ibge.gov.br/api/v3/noticias/';


export const queryIbgeNewsApi = (query, listener) => {

    const urlGet = `${baseUrl}?busca=${query ? query : 'brasil'}?qtd=30?tipo=noticia`;

    const options = {
        method: 'GET',
        url: `${urlGet}`,
    };

    axios.request(options).then(function (response) {
        console.log(JSON.stringify(response.data.count));
        return listener({
            sucess: true,
            data: response.data,
            texto: 'Sucesso'
        });
    }).catch(response => {
        console.log(JSON.stringify(response));
        return listener({
            sucess: false,
            data: null,
            texto: response
        });
    });
}