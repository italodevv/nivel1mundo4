// App.js
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Button } from 'react-native';
import CadastroFornecedor from './CadastroFornecedor';
import ListaFornecedores from './ListaFornecedores';
import AssociarImagem from './AssociarImagem';

const App = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [imagem, setImagem] = useState('');

  const handleAdicionarFornecedor = (fornecedor) => {
    setFornecedores([...fornecedores, fornecedor]);
  };

  const handleSelecionarImagem = (imagemSelecionada) => {
    setImagem(imagemSelecionada);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={{ flex: 1 }}>
        <CadastroFornecedor adicionarFornecedor={handleAdicionarFornecedor} />
        <ListaFornecedores fornecedores={fornecedores} />
        <AssociarImagem selecionarImagem={handleSelecionarImagem} />
        {/* Botão apenas para ilustrar */}
        <Button title="Limpar Dados" onPress={() => { setFornecedores([]); setImagem(''); }} />
      </View>
    </SafeAreaView>
  );
};

export default App;
