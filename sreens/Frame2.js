import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from 'react-native';

export default function Frame2() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [numeroEmerg, setNumeroEmerg] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [nomeCompletoErro, setNomeCompletoErro] = useState('');
  const [nomeResponsavelErro, setNomeResponsavelErro] = useState('');
  const [numeroEmergErro, setNumeroEmergErro] = useState('');
  const [emailErro, setEmailErro] = useState('');
  const [senhaErro, setSenhaErro] = useState('');

  const handleCadastro = () => {
    let valid = true;
    setNomeCompletoErro('');
    setNomeResponsavelErro('');
    setNumeroEmergErro('');
    setEmailErro('');
    setSenhaErro('');

    if (nomeCompleto === '') {
      setNomeCompletoErro('Nome completo é obrigatório');
      valid = false;
    }

    if (nomeResponsavel === '') {
      setNomeResponsavelErro('Nome do responsável é obrigatório');
      valid = false;
    }

    if (numeroEmerg === '') {
      setNumeroEmergErro('Número de emergência é obrigatório');
      valid = false;
    }

    if (email === '') {
      setEmailErro('Email é obrigatório');
      valid = false;
    }

    if (senha === '') {
      setSenhaErro('Senha é obrigatória');
      valid = false;
    }

    if (valid) {
      Alert.alert('Cadastro bem-sucedido!');
      
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <TextInput
        placeholder="Nome completo"
        value={nomeCompleto}
        onChangeText={setNomeCompleto}
        style={styles.input}
         placeholderTextColor="white"
      />
      {nomeCompletoErro ? <Text style={styles.erro}>{nomeCompletoErro}</Text> : null}

      <TextInput
        placeholder="Nome completo do responsável"
        value={nomeResponsavel}
        onChangeText={setNomeResponsavel}
        style={styles.input}
         placeholderTextColor="white"
      />
      {nomeResponsavelErro ? <Text style={styles.erro}>{nomeResponsavelErro}</Text> : null}

      <TextInput
        placeholder="Número de emergência"
        value={numeroEmerg}
        onChangeText={setNumeroEmerg}
        keyboardType="phone-pad"
        style={styles.input}
         placeholderTextColor="white"
      />
      {numeroEmergErro ? <Text style={styles.erro}>{numeroEmergErro}</Text> : null}

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
         placeholderTextColor="white"
      />
      {emailErro ? <Text style={styles.erro}>{emailErro}</Text> : null}

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
         placeholderTextColor="white"
      />
      {senhaErro ? <Text style={styles.erro}>{senhaErro}</Text> : null}

      <TouchableOpacity style={styles.btnCadastrar} onPress={handleCadastro}>
        <Text style={{ color: 'white', fontFamily: 'verdana' }}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#835691',
  },
  titulo: {
    color: 'white',
    fontFamily: 'verdana',
    top: -60,
    fontSize: 60,
    fontWeight: 'bold',
    left: 70,
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 8,
    color: 'white',
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 65,
  },
 erro: {
    color: 'white',
    marginBottom: 8,
    fontWeight: 'bold',
    marginLeft: 70,
  },
  btnCadastrar: {
    backgroundColor: '#4C0D62',
    borderRadius: 10,
    width: 180,
    height: 35,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    left: 95,
  },
});
