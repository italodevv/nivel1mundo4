import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CadastroFornecedor = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para enviar os dados do fornecedor para o servidor ou armazená-los localmente.
    console.log('Dados do fornecedor:', { nome, endereco, contato, categoria });
  };

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do fornecedor"
      />
      <Text>Endereço:</Text>
      <TextInput
        value={endereco}
        onChangeText={setEndereco}
        placeholder="Digite o endereço do fornecedor"
      />
      <Text>Contato:</Text>
      <TextInput
        value={contato}
        onChangeText={setContato}
        placeholder="Digite o contato do fornecedor"
      />
      <Text>Categoria:</Text>
      <TextInput
        value={categoria}
        onChangeText={setCategoria}
        placeholder="Digite a categoria do fornecedor"
      />
      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
};

export default CadastroFornecedor;
