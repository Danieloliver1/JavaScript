import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Tela Inicial</Text>
    <Button title="Ir para Tela 1" onPress={() => navigation.navigate('Screen1')} />
    <Button title="Ir para Tela 2" onPress={() => navigation.navigate('Screen2')} />
  </View>
);

export default HomeScreen;
