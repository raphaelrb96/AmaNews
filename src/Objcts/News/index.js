export class News {

    constructor(fonte, autor, dataPublicacao, capa, titulo, descricao, artigo, linkUrl, tags, categorias, imagens) {
        this.fonte = fonte; 
        this.autor = autor; 
        this.dataPublicacao = dataPublicacao; 
        this.capa = capa;
        this.titulo = titulo; 
        this.descricao = descricao; 
        this.artigo = artigo;
        this.linkUrl = linkUrl; 
        this.tags = tags; 
        this.categorias = categorias;
        this.imagens = imagens; 
    }

    novoObjNews(id) {

        return {
            id: id,
            timestamp: Date.now(),
            timestampUpdate: Date.now(),
            fonte: this.fonte,
            autor: this.autor,
            dataPublicacao: this.dataPublicacao,
            capa: this.capa,
            titulo: this.titulo,
            descricao: this.descricao,
            artigo: this.artigo,
            tags: this.tags,
            linkUrl: this.linkUrl,
            type: -1,
            categorias: this.categorias,
            numeros: {
                views: 0,
                compartilhamentos: 0,
                likes: 0,
                deslikes: 0,
                saves: 0,
                comentarios: 0,
                numAvalicacoes: 0,
                mediaAvaliacoes: 0
            },
            status: -1,
            impulsionamento: false,
            imagens: this.imagens,
            videos: [],
            user: null,
            local: null,
        };

    }
       
}

const objNews = {

    id: '',

    timestamp: 0,

    timestampUpdate: 0,

    fonte: {
        id: '',
        nome: '',
        imagem: ''
    },

    autor: {
        id: '',
        nome: '',
        imagem: ''
    },

    dataPublicacao: 0,

    titulo: '',

    descricao: '',

    //EXTRUTURA ANTIGA
    //artigo: {
      //  conteudo: '',
        //paragrafos: [],
        //headline: ''
    //},

    //EXTRUTURA NOVA
    artigo: [{
        headline: '',
        conteudo: '',
        urlImagem: '',
        urlVideo: '',
        linkButton: '',
        titleButton: ''
    }],

    tags: [],

    linkUrl: '',

    type: -1,

    categorias: [],

    numeros: {
        views: 0,
        compartilhamentos: 0,
        likes: 0,
        deslikes: 0,
        saves: 0,
        comentarios: 0,
        numAvalicacoes: 0,
        mediaAvaliacoes: 0
    },

    status: -1,

    impulsionamento: false,

    imagens: [{titulo: '', url: ''}],

    videos: [{titulo: '', url: ''}],

    //conteudo proprio
    user: null,

    local: null,

};