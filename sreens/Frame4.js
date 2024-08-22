import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Frame4() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [numeroEmerg, setNumeroEmerg] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleAtualizar = () => {
    console.log('Atualizar dados:', { nomeCompleto, nomeResponsavel, numeroEmerg, email, senha });
    Alert.alert('Dados atualizados com sucesso!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.titulo}>Dados Pessoais</Text>
        <Image source={require("../assets/menu.png")} style={styles.imgMenu} />
        <Image source={require("../assets/perfil.png")} style={styles.imgPerfil} />
      </View>
      <View style={styles.dados}>
        <TouchableOpacity style={styles.btndadosAdd}>
          <Text style={styles.texto1}>Dados Básicos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btndadosBasicos}>
          <Text style={styles.texto2}>Dados Adicionais</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Nome completo"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Nome completo do responsável"
          value={nomeResponsavel}
          onChangeText={setNomeResponsavel}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Número de emergência"
          value={numeroEmerg}
          onChangeText={setNumeroEmerg}
          keyboardType="phone-pad"
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.btnAtualizar} onPress={handleAtualizar}>
          <Text style={{ color: 'white', fontFamily: 'verdana' }}>Atualizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#835691',
  },
  topo: {
    backgroundColor: '#4C0D62',
    width: 450,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
    top: 8,
    left: 10,
  },
  imgPerfil: {
    borderRadius: 100,
    width: 35,
    height: 35,
    left: 70,
    top: 10,
  },
  imgMenu: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 40,
    top: 30,
  },
  dados: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  btndadosAdd: {
    backgroundColor: '',
    borderColor: '#4C0D62', 
    borderWidth: 3, 
    height: 35,
    width: 215,
    borderRadius: 3, 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    left:10,
  },
  btndadosBasicos: {
    backgroundColor: '',
    borderColor: '#4C0D62', 
    borderWidth: 3, 
    height: 35,
    width: 225,
    borderRadius: 3, 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  texto1: {
    fontSize: 15,
    color: 'white',
     fontWeight: 'bold',
  },
  texto2: {
    fontSize: 15,
     color: '#4C0D62',
      fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#835691',
  },
  input: {
    height: 45,
    width: 280,
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 8,
    color: 'white',
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 10,
  },
  btnAtualizar: {
    backgroundColor: '#4C0D62',
    borderRadius: 10,
    width: 180,
    height: 35,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
