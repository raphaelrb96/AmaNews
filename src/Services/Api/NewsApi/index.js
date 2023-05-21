import axios from 'axios';
const baseUrl = 'https://newsapi.org/v2/';

const apiKey = '95788134002e435da78ce546f9999762';




export const getTopHeadlinesNewsApi = (country, listener) => {

    const urlGet = `${baseUrl}top-headlines?country=${country ? country : 'br'}&apiKey=${apiKey}`;

    const options = {
        method: 'GET',
        url: urlGet,
    };

    axios.request(options).then(function (response) {
        //console.log(JSON.stringify(response.data));
        return listener({
            sucess: true,
            data: response.data,
            texto: 'Sucesso'
        });
    }).catch(response => {
        //console.log(`error: ${response}`);
        //console.log(JSON.stringify(response));
        return listener({
            sucess: false,
            data: null,
            texto: response
        });
    });
}

export const queryNewsApi = (query, listener) => {

    const urlGet = `${baseUrl}everything?q=${query ? query : 'Manaus'}&sortBy=popularity&apiKey=${apiKey}`;

    const options = {
        method: 'GET',
        url: urlGet,
    };

    axios.request(options).then(function (response) {
        //console.log(JSON.stringify(response.data));
        return listener({
            sucess: true,
            data: response.data,
            texto: 'Sucesso'
        });
    }).catch(response => {
        //console.log(`error: ${response}`);
        //console.log(JSON.stringify(response));
        return listener({
            sucess: false,
            data: null,
            texto: response
        });
    });
}
