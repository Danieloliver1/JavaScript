// Aluno Daniel Oliveira
// Matricula 202102040591
// Curso: Sistema de Informação

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './paginas/home';
import Screen1 from './paginas/Screen1';
import Screen2 from './paginas/Screen2';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tela 1" component={Screen1} />
      <Stack.Screen name="Tela 2" component={Screen2} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
