import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      {/* Primeira imagem usando require com a URI diretamente */}
      <Image
        style={styles.tinyLogo}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDHgfNXx9x0wHN3SPFguGTg1KdUSVU73eczmE2w82GA&s' }}
      />
      {/* Segunda imagem usando source com URI */}
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDHgfNXx9x0wHN3SPFguGTg1KdUSVU73eczmE2w82GA&s',
        }}
      />
      {/* Terceira imagem também usando source com URI */}
      <Image
        style={styles.logo}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDHgfNXx9x0wHN3SPFguGTg1KdUSVU73eczmE2w82GA&s',
        }}
      />
    </View>
  );
};

export default DisplayAnImage;
