import React from 'react';
import { View, Text, SectionList } from 'react-native';

const Screen1 = () => {
  const data = [
    { title: 'Frutas vermelhas', data: ['Maçã', 'Morango', 'Cereja'] },
    { title: 'Frutas cítricas', data: ['Laranja', 'Limão', 'Tangerina'] },
    { title: 'Frutas tropicais', data: ['Abacaxi', 'Manga', 'Banana'] },
  ];

  const renderItem = ({ item }) => <Text>{item}</Text>;
  const renderSectionHeader = ({ section }) => <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>;

  return (
    <View style={{ flex: 1 }}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

export default Screen1;
