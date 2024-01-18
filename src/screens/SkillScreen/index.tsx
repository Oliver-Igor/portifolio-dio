import React from 'react';
import { View, Text, FlatList, StyleSheet,  Image,  } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'TypeScript',
    star: '⭐⭐⭐⭐⭐',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'React Native',
    star: '⭐⭐⭐',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'NodeJS',
    star: '⭐⭐⭐',
  },
  
];

type ItemProps = {title: string, star: string};

const Item = ({ title, star }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.star}>{star}</Text>
  </View>
);


export function SkillScreen(navigation: any) {
  return (
    <View style={styles.container}>
      <View style={{height: 350, backgroundColor: '#fff',width: '100%', justifyContent: "center", alignItems:'center'}}>
        <Image source={{uri: 'https://github.com/Oliver-Igor.png'}} style={{width: 200, height: 200, borderRadius: 100, margin: 10}}/>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 25 }}>Minhas Habilidades</Text>
      </View>
      
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} star={item.star}/>}
      />
      
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 50,
    backgroundColor: '#fff',
    
  },
  item: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 16,
    margin: 10,
    width: 300,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',

  },
  title: {
    fontSize: 16,
    color: '#fff',
  },
  star: {
    fontSize: 16,
  }
});