import React from 'react';
import { View, Text, VirtualizedList } from 'react-native';

const Screen2 = () => {
  const data = Array.from({ length: 1000 }, (_, index) => index + 1);

  const renderItem = ({ item }) => <Text>{item}</Text>;

  return (
    <View style={{ flex: 1 }}>
      <VirtualizedList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        getItemCount={() => data.length}
        getItem={(data, index) => data[index]}
      />
    </View>
  );
};

export default Screen2;
