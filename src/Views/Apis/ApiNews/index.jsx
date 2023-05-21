import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { getTopHeadlinesNewsApi, queryNewsApi } from '../../../Services/Api/NewsApi';
import Pb from '../../../Components/Pb';
import ItemNews from '../../../Components/ItemNews';
import { News } from '../../../Objcts/News';

export default function ApiNews({navigation}) {

  const [state, setState] = useState({pb: true, news: []});

  const {pb, news} = state;

  useEffect(() => {

    queryNewsApi(null, ({sucess, data, texto}) => {
      if(data) {
        const {totalResults, status, articles} = data;
        //console.log(JSON.stringify(articles[0]));
        setState((prevState) => ({
          ...prevState,
          pb: false,
          news: articles
        }));
      } else {
        //console.log(`error: ${texto}`);
        setState((prevState) => ({
          ...prevState,
          pb: false
        }));
      }

      

    });
    
  }, []);

  const salvar = (item) => {
    console.log('salvar', item);
  };

  const editar = (item) => {
    const fonte = {nome: item.source.name};
    const autor = {nome: item.author};
    const dataPub = new Date(item.publishedAt).getTime();
    const capa = item.urlToImage;
    const titulo = item.title;
    const descricao = item.description;
    const artigo = [];
    const url = item.url;
    const tags = [];
    const categorias = [];
    const imagens = [];
    const novaNews = new News(fonte, autor, dataPub, capa, titulo, descricao, artigo, url, tags, categorias, imagens);
    navigation.navigate('Editor News', {object: novaNews});
  };

  const renderItem = ({ item }) => (
    <ItemNews titulo={item.title} autor={item.author} image={item.urlToImage} salvar={() => salvar(item)} editar={() => editar(item)} />
  );

  return (
    <SafeAreaView>
        {
          pb ? 
          <Pb /> : 
          <FlatList
            data={news}
            renderItem={renderItem}
            keyExtractor={(item, i) => i}
            showsVerticalScrollIndicator={false}
          />
        }
    </SafeAreaView>
  );
}