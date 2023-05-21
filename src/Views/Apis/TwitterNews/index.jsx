import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Pb from '../../../Components/Pb';
import ItemNews from '../../../Components/ItemNews';
import { queryNewsWorldApi } from '../../../Services/Api/WorldNewsApi';

export default function TwitterNews() {
  const [state, setState] = useState({pb: true, news: []});

  const {pb, news} = state;

  useEffect(() => {

    queryNewsWorldApi(null, ({sucess, data, texto}) => {
      if(data) {
        const queryNews = data.news;
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
    <ItemNews titulo={item.title} autor={item.author} image={item.image} />
  );

  return (
    <View>
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
    </View>
  );
}