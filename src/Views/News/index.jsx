import Pb from '../../Components/Pb';
import React, {useState, useEffect, useRef, useMemo, useCallback, useLayoutEffect} from 'react';
import { View, Text, StyleSheet, FlatList, LogBox, Linking, YellowBox, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { List, FAB, Portal, Provider as PaperProvider, DefaultTheme, Dialog, TextInput, Button, IconButton } from 'react-native-paper';
import BottomSheet, { BottomSheetScrollView, BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { colorCinza, colorPrimary } from '../../Cores/cores';
import Icon from 'react-native-paper/src/components/Icon';


const theme = {
  ...DefaultTheme,
  colors: {
      primary: colorPrimary,
      accent: colorCinza,
  }
}

const styles = StyleSheet.create({
  fab: {
      backgroundColor: colorPrimary
  },
  container: {
      flex: 1,
  },
  bottomSheet: {
      elevation: 8
  },
  footer: {
      height: 20
  },
  detalhe: {
      paddingLeft: 20,
      paddingRight: 20
  },
  containerBottom: {
      flex: 1,
      backgroundColor: 'transparent',
      position: 'absolute',
      height: '100%',
      width: '100%',
  },
  buttons: {
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center'
  },
  inputDialog: {
      marginTop: 16
  },
  dados: {
      marginLeft: 0,
      padding: 0
  },
  footer: {
      height: 35
  },
  icone: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      marginTop: 14
  },
  bt: {
      fontSize: 25
  },
  botao: {
      margin: 6
  },
  subheader: {
      marginLeft: 8,
      marginRight: 20,
      marginTop: 0,
      marginBottom: 8
  },
  itemIcon:{
    width: 30,
    height: 30,
    marginRight: 10
  },
  sectionHeaderContainer: {
    backgroundColor: "white",
    padding: 12,
  },
  itemContainer: {
    paddingLeft: 6,
    paddingRight: 6,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    alignContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  sectionHeaderTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12
  },
  iconItemList: {
    width: 20,
    height: 20,
    marginRight: 12,
    marginLeft: 6
  },
  txtItem: {
    flex: 1
  }
});



export default function News({navigation}) {

  LogBox.ignoreAllLogs();
  const [pb, setPb] = useState(true);
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  const bottomSheetRef = useRef();
  const [index, setIndex] = useState(-1);
  const snapPoints = useMemo(() => ['50%'], []);

  

  const handleSheetChanges = useCallback((index) => {
    console.log('Update index para: ' + index);
    setIndex(index);
    //bottomSheetRef.current.snapToIndex(index);
  }, []);

  let clickOpen = useCallback(() => {
    console.log('click item');
    if(bottomSheetRef.current !== undefined) {
        console.log('expand ');
        bottomSheetRef.current.expand();
    }
  }, []);

  let close = useCallback(() => {
    if(bottomSheetRef.current !== undefined) {
        bottomSheetRef.current.close();
        
    }
  }, []);

  let clickItem = useCallback((item) => {
    console.log(item)
    if(item === 'API NEWS') {
      navigation.navigate('ApiNews');
      return;
    }

    if(item === 'WORLD NEWS API') {
      navigation.navigate('WorldNews');
      return;
    }

    if(item === 'IBGE API') {
      navigation.navigate('IbgeNews');
      return;
    }

    if(item === 'TWITTER API') {
      navigation.navigate('TwitterNews');
      return;
    }

  }, []);

  // render
  const renderSectionHeader = useCallback(
    ({ section }) => (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderTitle}>{section.title}</Text>
      </View>
    ),
    []
  );
  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity onPress={() => clickItem(item)} style={styles.itemContainer}>
        <Image style={styles.iconItemList} color={colorCinza} size={20} source={require('../../img/api_icon.png')} />
        <Text style={styles.txtItem}>{item}</Text>
        <Image style={styles.iconItemList} color={colorCinza} size={20} source={require('../../img/right_icon_cinza.png')} />
      </TouchableOpacity>
    ),
    []
  );

  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
            <View>
                <TouchableOpacity onPress={() => clickOpen()}>
                    <Image style={styles.itemIcon} color={colorCinza} size={32} source={require('../../img/add_icon.png')} />
                </TouchableOpacity>
            </View>
        )
    });
  }, [navigation]);

const listaData = [
  {
    title: 'Adicionar News', 
    data: [
      'IBGE API',
      'API NEWS',
      'WORLD NEWS API',
      //'TWITTER API',
      //'OPEN IA',
      'ESCREVER ARTIGO'
    ]
  }
];

  return (
      <PaperProvider style={styles.container}>
        <Portal>
          <SafeAreaView style={styles.containerBottom}>
            {
              //<FlatList 
                  //keyExtractor={item => item.idCompra}
                  //data={DATA_LIST}
                  //ListHeaderComponent={() => <HeaderVendas classificar={classificar} title={TITULO_LIST} maisAtrasada={resumo.maisAtrasada} canceladas={resumo.numCanceladas} concluidas={resumo.numConcluidas} emRota={resumo.numEmRota} atrasadas={resumo.numAtrasadas} novas={resumo.numNovas} />}
                  //renderItem={({item}) =>  <ItemVenda click={click} key={item.idCompra} item={item} />}
              ///>
            }

              <BottomSheet
                  style={styles.bottomSheet}
                  ref={bottomSheetRef}
                  index={index}
                  enablePanDownToClose={true}
                  snapPoints={snapPoints}
                  onChange={handleSheetChanges}>
                      <BottomSheetSectionList
                        sections={listaData}
                        keyExtractor={(i) => i}
                        renderSectionHeader={renderSectionHeader}
                        renderItem={renderItem}
                        contentContainerStyle={styles.contentContainer}
                      />
              </BottomSheet>
          </SafeAreaView>
        </Portal>
      </PaperProvider>
  );
}