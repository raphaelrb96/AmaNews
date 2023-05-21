import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import Pb from '../../../Components/Pb';
import ItemNews from '../../../Components/ItemNews';
import { queryIbgeNewsApi } from '../../../Services/Api/IbgeApi';

export default function IbgeNews() {
  const [state, setState] = useState({pb: true, news: []});

  const {pb, news} = state;

  useEffect(() => {

    queryIbgeNewsApi(null, ({sucess, data, texto}) => {
      if(data) {
        const queryNews = data.items;
        //console.log(JSON.stringify(articles[0]));
        setState((prevState) => ({
          ...prevState,
          pb: false,
          news: queryNews
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

  const renderItem = ({ item }) => (
    <ItemNews titulo={item.titulo} autor={item.data_publicacao} image={item.imagens} />
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