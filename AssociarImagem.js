import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const AssociarImagem = () => {
  const [imagem, setImagem] = useState(null);

  const selecionarImagem = () => {
    const options = {
      title: 'Selecione uma imagem',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Usuário cancelou a seleção de imagem');
      } else if (response.error) {
        console.log('Erro ao selecionar a imagem:', response.error);
      } else {
        setImagem(response.uri);
      }
    });
  };

  const limparDados = () => {
    setImagem(null);
  };

  return (
    <View style={styles.container}>
      {imagem ? (
        <View style={styles.imagemContainer}>
          <Image source={{ uri: imagem }} style={styles.imagem} />
          <Button title="Limpar Dados" onPress={limparDados} />
        </View>
      ) : (
        <Button title="Selecionar Imagem" onPress={selecionarImagem} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imagemContainer: {
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default AssociarImagem;
