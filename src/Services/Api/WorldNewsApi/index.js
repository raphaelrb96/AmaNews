import axios from 'axios';
const baseUrl = 'https://api.worldnewsapi.com/search-news';

const apiKey = 'afcfcd991dd84e348435cefaaf80cf0e';

export const queryNewsWorldApi = (query, listener) => {

    const urlGet = `${baseUrl}&api-key=${apiKey}?text=${query ? query : 'brasil'}`;

    const options = {
        method: 'GET',
        url: `https://api.worldnewsapi.com/search-news?api-key=afcfcd991dd84e348435cefaaf80cf0e&text=${query ? query : 'brasil'}&language=pt`,
    };

    axios.request(options).then(function (response) {
        return listener({
            sucess: true,
            data: response.data,
            texto: 'Sucesso'
        });
    }).catch(response => {
        return listener({
            sucess: false,
            data: null,
            texto: response
        });
    });
}