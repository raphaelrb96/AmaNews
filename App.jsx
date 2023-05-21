/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Card, Title } from 'react-native-paper';
import 'react-native-gesture-handler'


import {NavigationContainer} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { Avatar } from 'react-native-paper';
import { colorDark, colorPrimary, colorPrimaryDark, colorSecondaryDark } from './src/Cores/cores';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Users from './src/Views/Users';
import News from './src/Views/News';
import ApiNews from './src/Views/Apis/ApiNews';
import WorldNews from './src/Views/Apis/WorldNews';
import IbgeNews from './src/Views/Apis/IbgeNews';
import TwitterNews from './src/Views/Apis/TwitterNews';
import EditorNews from './src/Views/EditorNews';


const Stack = createStackNavigator();

const styles = StyleSheet.create({
  sectionContainer: {
    height: 56,
    width: '100%',
    elevation: 0.5,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
      flex: 1,
      paddingTop: 40,
      paddingBottom: 30,
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignContent: 'space-around',
  },
  row: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignContent: 'space-between',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 25
  },
  item: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.8,
      borderColor: '#4F4F4F',
      borderRadius: 6,
      padding: 10,
  },
  itemIcon: {
    marginLeft: 0
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colorDark,
  },
  img: {
    width: 180,
    height: 36
  },
  cardItem: {
      marginRight: 10,
      marginLeft: 10,
      flex: 1,
  },
  logo: {
    marginBottom: 20
  },
  btHeader: {
    fontSize: 30
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colorPrimary,
    marginBottom: 40
  },
  iconButton: {
    width: 50,
    height: 50,
    margin: 12,
  }
});

function IconeMenu (props) {
  return(
      <Card elevation={8} style={styles.cardItem}>
          <TouchableOpacity style={styles.item} onPress={() => props.nav.navigate(props.name)}>
              <Image style={styles.iconButton} color={colorPrimary} size={45} source={props.icone} />
              <Text style={styles.itemText}>{props.name}</Text>
          </TouchableOpacity>
      </Card>
      
  );
}

function MenuMain ({navigation}) {
  return(
      <View style={styles.container} >

          <Avatar.Image style={styles.logo} size={110} source={require('./src/img/amanews.png')} />

          <Title style={styles.title}>AMANEWS</Title>

          <View style={styles.row}>
              <IconeMenu nav={navigation} name="News" icone={require(`./src/img/news_icon.png`)} />
              <IconeMenu nav={navigation} name="Users" icone={require(`./src/img/users_icon.png`)} />
          </View>
          {
          //<View style={styles.row}>
              //<IconeMenu nav={navigation} name="Histórico" icone="podium" />
               //<IconeMenu nav={navigation} name="Vendedor" icone="account" />
          //</View>
          }
      </View>
  )
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return(

    <NavigationContainer>
      <StatusBar backgroundColor={colorPrimaryDark} barStyle="light-content" />

      <Stack.Navigator>
        
        <Stack.Screen 
          name="Home" 
          component={MenuMain} 
          options={{
            headerShown: false,
            headerStyle: {
              elevation: 6,
              shadowColor: 'black',
            }
          }}
        />

        <Stack.Screen 
          name="Users" 
          component={Users} 
          options={{
            headerTitle: 'User Center',
            headerStyle: {
              elevation: 6,
              shadowColor: 'black',
            }
          }}
        />

        <Stack.Screen 
          name="News" 
          component={News} 
          options={{
            headerTitle: 'News Center',
            headerStyle: {
              elevation: 6,
              shadowColor: 'black',
            }
          }}
        />

        <Stack.Screen 
          name="Editor News" 
          component={EditorNews} 
          options={{
            headerStyle: {
              elevation: 6,
              shadowColor: 'black',
            }
          }}
        />

        <Stack.Screen 
          name="ApiNews" 
          component={ApiNews} 
          options={{
            headerStyle: {
              elevation: 6,
              shadowColor: 'black',
            },
            headerTitle: 'Api News'
          }}
        />

        <Stack.Screen 
          name="WorldNews" 
          component={WorldNews} 
          options={{
            headerStyle: {
              elevation: 6,
              shadowColor: 'black',
            },
            headerTitle: 'World News Api'
          }}
        />

        <Stack.Screen 
          name="IbgeNews" 
          component={IbgeNews} 
          options={{
            headerStyle: {
              elevation: 6,
              shadowColor: 'black',
            },
            headerTitle: 'IBGE News Api'
          }}
        />

        <Stack.Screen 
          name="TwitterApi" 
          component={TwitterNews} 
          options={{
            headerStyle: {
              elevation: 6,
              shadowColor: 'black',
            },
            headerTitle: 'Twitter Api'
          }}
        />

      </Stack.Navigator>
      
    </NavigationContainer>

  );
}

export default App;
