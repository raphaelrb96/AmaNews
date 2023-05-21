import React, { useLayoutEffect, useState } from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert, FlatList } from 'react-native';
import Pb from '../../Components/Pb';
import { Button, Caption, Card, DefaultTheme, Divider, FAB, Headline, Subheading, TextInput, Title } from 'react-native-paper';
import { colorCinza, colorPrimaryDark, colorSecondaryDark, colorSecondaryLight } from '../../Cores/cores';
import { colorPrimary } from '../../Cores/cores';

const styles = StyleSheet.create({
  img: {
      height: 240,
      width: '100%',
      margin: 0,
      borderRadius: 4,
      resizeMode: 'cover'
  },
  title: {
    marginLeft: 16,
    marginTop: 18,
    marginBottom: 4
  },
  container: {
      padding: 0,
      flex: 1,
  },
  backgroundWhite: {
    backgroundColor: colorSecondaryLight
  },
  text: {
      marginTop: 6,
      marginBottom: -6
  },
  content: {
      flex: 1
  },
  row: {
      flexDirection: 'row'
  },
  headline: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 22
  },
  subhead: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    fontSize: 16
  },
  caption: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,

  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    marginLeft: 16,
    marginRight: 16,
  },
  labeInput: {
    fontSize: 20,
    margin: 10
  },
  spacingEndBottom: {
    height: 50
  },
  itemIcon:{
    width: 30,
    height: 30,
    marginRight: 10
  },
  card: {
    marginBottom: 2,
    marginTop: 16
  },
  spacingCard: {
    height: 18
  },
  espaco: {
      width: 16
  },
  btn: {
      padding: 0,
      margin: 0,
      height: 40,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      borderWidth: 1.5,
      borderColor: colorCinza
  },
  titleBtn: {
      fontSize: 12,
      
  },
  contentBtn: {
      padding: 0,
      margin: 0,
  },
  flex: {
    flex: 1
  },
  bottomContent: {
    marginTop: -14
  },
  topContent: {
    marginBottom: 0,
  },
  divider: {
    marginTop: 0,
  },
  fab: {
    marginBottom: 36,
    marginTop: 36,
    marginRight: 36,
    marginLeft: 36,
    bottom: 0,
    right: 0,
    left: 0
},
});


const theme = {
  ...DefaultTheme,
  colors: {
    primary: colorCinza,
    background: colorSecondaryLight,
    accent: colorPrimaryDark
  }
};

function InputParagrafo({addNovoParagrafo}) {

  const [paragrafo, setParagrafo] = useState({
    headline: '', 
    urlImagem: '',
    urlVideo: '',
    linkButton: '',
    titleButton: '', 
    conteudo: ''
  });

  const {headline, urlImagem, urlVideo, linkButton, titleButton, conteudo} = paragrafo;

  const confirmarDadosParagrafo = () => {


    if(headline.length < 20) {
        Alert.alert('Dados Incompletos', 'Insira uma Headline com no minimo 20 Caracteres');
        return false;
    }

    if(conteudo.length < 200) {
        Alert.alert('Dados Incompletos', 'Insira um Conteúdo com no minimo 200 Caracteres para o Parágrafo');
        return false;
    }

    return true;

  };

  const adicionar = () => {
    const confirmacao = confirmarDadosParagrafo();
    if(!confirmacao) return;
    addNovoParagrafo(paragrafo);
    limpar();
  };

  const limpar = () => {
    setParagrafo({
      headline: '', 
      urlImagem: '',
      urlVideo: '',
      linkButton: '',
      titleButton: '', 
      conteudo: ''
    });
    console.log('limpar');
  };


  console.log(paragrafo);

  return (
    <Card elevation={2} style={[styles.backgroundWhite, styles.card]}>
          <View style={styles.container}>


              <Headline style={styles.headline}>Editor de Parágrafo</Headline>

              <Title style={styles.title}>Headline do Parágrafo</Title>
              <TextInput 
                  theme={theme} 
                  defaultValue={headline} 
                  onChangeText={(value) => {
                    setParagrafo((prevState) => ({
                        ...prevState,
                        headline: value
                    }));
                  }} 
                  mode="outlined"
                  multiline={true}
                  numberOfLines={2}
                  style={styles.input} 
              />

              <Title style={styles.title}>Conteúdo do Parágrafo</Title>
              <TextInput 
                  theme={theme} 
                  defaultValue={conteudo} 
                  onChangeText={(value) => {
                    setParagrafo((prevState) => ({
                      ...prevState,
                      conteudo: value
                  }));
                  }} 
                  mode="outlined"
                  multiline={true}
                  numberOfLines={16}
                  style={styles.input} 
              />

              <Title style={styles.title}>URL da Imagem</Title>
              <TextInput 
                  theme={theme} 
                  defaultValue={urlImagem} 
                  onChangeText={(value) => {
                    setParagrafo((prevState) => ({
                      ...prevState,
                      urlImagem: value
                  }));
                  }} 
                  mode="outlined"
                  multiline={true}
                  numberOfLines={2}
                  style={styles.input} 
              />

              <Title style={styles.title}>Titulo do Botão</Title>
              <TextInput 
                  theme={theme} 
                  defaultValue={titleButton} 
                  onChangeText={(value) => {
                    setParagrafo((prevState) => ({
                      ...prevState,
                      titleButton: value
                  }));
                  }} 
                  mode="outlined"
                  multiline={true}
                  numberOfLines={2}
                  style={styles.input} 
              />

              <Title style={styles.title}>Link do Botão</Title>
              <TextInput 
                  theme={theme} 
                  defaultValue={linkButton} 
                  onChangeText={(value) => {
                    setParagrafo((prevState) => ({
                      ...prevState,
                      linkButton: value
                  }));
                  }} 
                  mode="outlined"
                  multiline={true}
                  numberOfLines={2}
                  style={styles.input} 
              />

              <View style={styles.spacingCard} />
              <View style={styles.spacingCard} />
              <View style={styles.spacingCard} />

              <View style={styles.row}>
                <View style={styles.espaco} />
                <Button theme={theme} style={styles.btn} icon='delete' color={colorCinza} labelStyle={styles.titleBtn} contentStyle={styles.contentBtn} titleStyle={styles.titleBtn} mode="outlined" onPress={() => limpar()}>
                    Limpar
                </Button>
                <View style={styles.espaco} />
                <Button theme={theme} style={[styles.btn, styles.flex]} icon="bookmark-plus" color={colorCinza} labelStyle={styles.titleBtn} contentStyle={styles.contentBtn} titleStyle={styles.titleBtn} mode="outlined" onPress={() => adicionar()}>
                    Adicionar Parágrafo
                </Button>
                <View style={styles.espaco} />
              </View>

              <View style={styles.spacingCard} />
              <View style={styles.spacingCard} />

          </View>
    </Card>
  )
};

function ItemArtigo({headline, conteudo, imagem, tituloBtn, linkBtn, index}) {

  return (
    <Card elevation={2} style={[styles.backgroundWhite]}>

        {
          index === 0
          ?
          <View>
            <Headline style={styles.headline}>Parágrafos do Artigo</Headline>
            <View style={styles.spacingCard} />
            <Divider style={styles.divider} />
          </View>
          
          :
          <Divider style={styles.divider} />
        }

        


        <Title style={styles.title}>
          {`${index + 1}° Parágrafo`}
        </Title>

        <Subheading style={styles.subhead}>
          {headline}
        </Subheading>

        <Caption style={styles.caption}>
          {conteudo}
        </Caption>

        <View style={styles.spacingCard} />
        

    </Card>
  )
};

function InputInformacoes({titulo, setTitulo, descricao, setDescricao, autor, setAutor, fonte, setFonte, publicacao, setPublicacao, conteudo, setConteudo}) {

  
  return (
      <Card elevation={2} style={[styles.backgroundWhite, styles.card, styles.topContent]}>
          
          <View style={styles.container}>

              <Headline style={styles.headline}>Informações Principais</Headline>

              <Title style={styles.title}>Titulo do Artigo</Title>

              <TextInput 
                  theme={theme} 
                  defaultValue={titulo} 
                  onChangeText={(value) => {
                      setTitulo(value);
                  }} 
                  mode="outlined"
                  multiline={true}
                  numberOfLines={4}
                  style={styles.input} 
              />

              <Title style={styles.title}>Descrição do Artigo</Title>

              <TextInput 
                  theme={theme} 
                  defaultValue={descricao} 
                  onChangeText={(value) => {
                      setDescricao(value);
                  }} 
                  mode="outlined"
                  multiline={true}
                  numberOfLines={6}
                  style={styles.input} 
              />

              <Title style={styles.title}>Autor do Artigo</Title>

              <TextInput 
                  theme={theme} 
                  defaultValue={autor} 
                  onChangeText={(value) => {
                      setAutor(value);
                  }} 
                  mode="outlined"
                  multiline={true}
                  numberOfLines={2}
                  style={styles.input} 
              />

              <Title style={styles.title}>Fonte do Artigo</Title>

              <TextInput 
                  theme={theme} 
                  defaultValue={fonte} 
                  onChangeText={(value) => {
                      setFonte(value);
                  }} 
                  mode="outlined"
                  multiline={true}
                  numberOfLines={2}
                  style={styles.input} 
              />

              <Title style={styles.title}>Data da Publicação do Artigo</Title>

              <TextInput 
                  theme={theme} 
                  defaultValue={new Date(publicacao).toLocaleString()} 
                  onChangeText={(value) => {
                      setPublicacao(value);
                  }} 
                  mode="outlined"
                  multiline={true}
                  numberOfLines={2}
                  style={styles.input} 
              />

              <View style={styles.spacingCard} />
              <View style={styles.spacingCard} />

          </View>    
          
      </Card>
  );
}

function ContainerImagens({capa, setCapa}) {
  return (
    <Card elevation={2} style={[styles.backgroundWhite, styles.card]}>

      <Headline style={styles.headline}>Editor de Imagens</Headline>
      <Title style={styles.title}>Capa do Artigo</Title>
      <View style={styles.spacingCard} />
      <ImageBackground style={styles.img} source={require(`../../img/news_banner.png`)}>
        <Image style={styles.img} source={capa ? {uri: capa} : ''} />
      </ImageBackground>
      <View style={styles.spacingCard} />
      <View style={styles.spacingCard} />
    </Card>

  )
};

function TopContent({object, setObj}) {

    const setTitulo = (string) => {
      setObj((prevState) => ({
          ...prevState,
          titulo: string
      }));
    };

    const setDescricao = (string) => {
      setObj((prevState) => ({
          ...prevState,
          descricao: string
      }));
    };

    const setAutor = (string) => {
      setObj((prevState) => ({
          ...prevState,
          autor: {nome: string}
      }));
    };

    const setFonte = (string) => {
      setObj((prevState) => ({
          ...prevState,
          fonte: {nome: string}
      }));
    };

    const setConteudo = (string) => {
      setObj((prevState) => ({
          ...prevState,
          artigo: {conteudo: string}
      }));
    };

    const setPublicacao = (string) => {
      setObj((prevState) => ({
          ...prevState,
          dataPublicacao: {nome: new Date(string).getTime()}
      }));
    };

    return(
      <View>

          <ContainerImagens capa={object.capa} />

          <InputInformacoes 
            titulo={object.titulo} 
            setTitulo={setTitulo} 
            descricao={object.descricao}
            setDescricao={setDescricao}
            autor={object.autor.nome}
            setAutor={setAutor}
            fonte={object.fonte.nome}
            setFonte={setFonte}
            conteudo={object.artigo.conteudo}
            setConteudo={setConteudo}
            publicacao={object.dataPublicacao}
            setPublicacao={setPublicacao}
          />

          <View style={styles.spacingCard} />

      </View>
    );
};

function BottomContent({object, setObj}) {

  const addNovoParagrafo = (obj) => {

    let arrayCopy = object.artigo.slice();
    arrayCopy.push(obj);

    setObj((prevState) => ({
        ...prevState,
        artigo: arrayCopy
    }));

  };

  return(
    <View>
      <InputParagrafo addNovoParagrafo={addNovoParagrafo} />
      <FAB 
        label='Salvar Artigo'
        icon='content-save'
        style={styles.fab}
        elevation={10}
        theme={theme}
      />
    </View>
  )
}

export default function EditorNews({route, navigation}) {
  const { object } = route.params;
  const [state, setState] = useState({pb: false});
  const [newsObjc, setNewsObjc] = useState(object);


  const {pb} = state;


  if(pb) {
    return (
        <SafeAreaView>
            <Pb />
        </SafeAreaView>
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
            <View>
                <TouchableOpacity onPress={() => Linking.openURL(object.linkUrl)}>
                    <Image style={styles.itemIcon} color={colorCinza} size={32} source={require('../../img/go_link_icon.png')} />
                </TouchableOpacity>
            </View>
        )
    });
  }, [navigation]);

  const renderItem = ({ item, index }) => (
    <ItemArtigo 
      conteudo={item.conteudo}
      headline={item.headline}
      index={index}
    />
  );

  console.log(newsObjc.artigo);

  return (
    <SafeAreaView style={styles.container}>
        {
          newsObjc ?
          <FlatList 
            ListHeaderComponent={props => <TopContent object={newsObjc} setObj={setNewsObjc} />}
            ListFooterComponent={props => <BottomContent object={newsObjc} setObj={setNewsObjc} />}
            ListFooterComponentStyle={newsObjc.artigo.length === 0 ? styles.bottomContent : null}
            ListHeaderComponentStyle={styles.topContent}
            data={newsObjc.artigo}
            renderItem={renderItem}
            keyExtractor={(item, i) => i}
            showsVerticalScrollIndicator={false}
          />
          :
          null
        }
    </SafeAreaView>
  )

};