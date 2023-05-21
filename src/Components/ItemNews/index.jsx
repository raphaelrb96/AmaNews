import React, { useCallback } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Card, List, Paragraph, Title, Button, DefaultTheme } from 'react-native-paper';
import { colorCinza, colorSecondaryLight } from '../../Cores/cores';

let theme = {
    ...DefaultTheme,
    colors: {
        primary: colorCinza,
        accent: colorCinza
    }
};

const styles = StyleSheet.create({
    img: {
        height: 100,
        width: 150,
        margin: 0,
        borderRadius: 4,
        resizeMode: 'cover'
    },
    container: {
        marginTop: 20,
        padding: 0
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
    itemValor: {
        margin: 0,
        padding: 0
    },
    valorTitulo: {
        fontSize: 14
    },
    valorDescricao: {
        fontSize: 12,
        marginRight: 8
    },
    itemTitulo: {
        fontSize: 13,
        marginRight: 8
    },
    itemDescricao: {
        flex: 1,
        fontSize: 10
    },
    itemContent: {
        marginTop: 16,
        marginLeft: 12,
        marginRight: 12,
        backgroundColor: colorSecondaryLight
    },
    containerBotoes: {
        width: 40,
    },
    contentBotao: {
        flex: 1,
    },
    botao: {
        width: 40,
        height: 40,
        margin: 0,
        padding: 0
    },
    espaco: {
        width: 6
    },
    btn: {
        padding: 0,
        margin: 0,
        height: 35,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    titleBtn: {
        fontSize: 10,
        
    },
    contentBtn: {
        padding: 0,
        margin: 0,
    }
});

function Content ({text, click}) {


    return(
        <View style={{flex: 1}}>
            <View style={styles.row}>
                <Text numberOfLines={1} style={styles.valorDescricao}>{text}</Text>
                <View style={styles.espaco} />
            </View>
            <View style={{height: 12}} />
            <View style={styles.row}>
                <Button theme={theme} style={styles.btn} labelStyle={styles.titleBtn} contentStyle={styles.contentBtn} titleStyle={styles.titleBtn} mode="outlined" onPress={() => click(1)}>
                    Salvar
                </Button>
                <View style={styles.espaco} />
                <Button theme={theme} style={styles.btn} labelStyle={styles.titleBtn} contentStyle={styles.contentBtn} titleStyle={styles.titleBtn} mode="outlined" onPress={() => click(2)}>
                    Editar
                </Button>
                <View style={styles.espaco} />
                <View style={styles.espaco} />
            </View>
        </View>
    )
}

export default function ItemNews({titulo, autor, image, editar, salvar}) {
    
    //console.log(JSON.stringify(image));

    const click = useCallback((mode) => {

        if(mode === 2) {
            return editar();
        } else {
            return salvar();
        }

    }, []);
    

    return (
        
        <List.Item
            title={titulo}
            titleNumberOfLines={2}
            style={styles.itemContent}
            description={props => <Content click={click} text={autor} />}
            titleStyle={styles.itemTitulo}
            descriptionStyle={styles.itemDescricao}
            right={props => <ImageBackground style={styles.img} source={require(`../../img/news_banner.png`)}><Image style={styles.img} source={image ? {uri: image} : ''} /></ImageBackground>}
        />
    );
}