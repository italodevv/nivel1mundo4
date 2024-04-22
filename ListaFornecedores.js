// ListaFornecedores.js
import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import CadastroFornecedor from './CadastroFornecedor'; // Importe o componente CadastroFornecedor

const ListaFornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);

  // Função para adicionar um fornecedor à lista
  const adicionarFornecedor = (fornecedor) => {
    setFornecedores([...fornecedores, fornecedor]);
  };

  return (
    <View>
      {/* Renderize o componente CadastroFornecedor */}
      <CadastroFornecedor adicionarFornecedor={adicionarFornecedor} />
      <Text>Lista de Fornecedores:</Text>
      <FlatList
        data={fornecedores}
        renderItem={({ item }) => (
          <View>
            <Text>Nome: {item.nome}</Text>
            <Text>Endereço: {item.endereco}</Text>
            <Text>Contato: {item.contato}</Text>
            <Text>Categoria: {item.categoria}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListaFornecedores;
