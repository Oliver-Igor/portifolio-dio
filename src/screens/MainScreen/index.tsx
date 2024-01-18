import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Linking, ToastAndroid } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/igor-ramos1996',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Github',
    link: 'https://github.com/Oliver-Igor'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'E-mail',
    link: 'mailto:valterigor.florestal@gmail.com'
  },
];

const openUrl = async ({ link }: ItemProps) => {
  if (await Linking.canOpenURL(link)) {
    await Linking.openURL(link);
  } else {
    ToastAndroid.show('Não é possível abrir este URL', ToastAndroid.SHORT);
  }
};

type ItemProps = { title: string; link: string };

const Item = ({title, link }: ItemProps) => (
  <TouchableOpacity onPress={() => openUrl({link})} style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export function MainScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={{ height: 350, backgroundColor: '#fff', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={{ uri: 'https://github.com/Oliver-Igor.png' }} style={{ width: 200, height: 200, borderRadius: 100, margin: 10 }} />
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 25 }}>Igor Ramos</Text>
      </View>

      <FlatList data={DATA} renderItem={({ item }) => <Item title={item.title} link={item.link} />} />

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 10,
    margin: 10,
    width: 200,
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
});
