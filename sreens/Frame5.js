import * as React from "react";
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { Image } from "expo-image";

export default function Frame5() {
  const [nomeCEP, setCEP] = useState('');
  const [nomeComplemento, setComplemento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
   const [estado, setEstado] = useState('');
  const [nasc, setNasc] = useState('');
  const [cpf, setCPF] = useState('');

  const handleAtualizar = () => {
    console.log("Dados atualizados:", { nomeCEP, nomeComplemento, endereco, bairro, cidade, estado, nasc, cpf});
  };
   const handleExcluir = () => {
    console.log("Dados Excluidos:", { nomeCEP, nomeComplemento, endereco, bairro, cidade, estado, nasc, cpf});
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
          placeholder="CEP"
          value={nomeCEP}
          onChangeText={setCEP}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Complemento"
          value={nomeComplemento}
          onChangeText={setComplemento}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Endereço"
          value={endereco}
          onChangeText={setEndereco}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Bairro"
          value={bairro}
          onChangeText={setBairro}
      
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Cidade"
          value={cidade}
          onChangeText={setCidade}
          style={styles.input}
          placeholderTextColor="white"
        />
           <TextInput
          placeholder="Estado"
          value={estado}
          onChangeText={setEstado}
          style={styles.input}
          placeholderTextColor="white"
        />
           <TextInput
          placeholder="Data de Nascimento"
          value={nasc}
          onChangeText={setNasc}
          style={styles.input}
          placeholderTextColor="white"
        />
           <TextInput
          placeholder="CPF"
          value={cpf}
          onChangeText={setCPF}
          style={styles.input}
          placeholderTextColor="white"
    />
        <TouchableOpacity style={styles.btnAtualizar} onPress={handleAtualizar}>
          <Text style={styles.btnAtualizarText}>Atualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnExcluir} onPress={handleExcluir}>
          <Text style={styles.btnExcluirText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#835691',
  },
  topo: {
    backgroundColor: '#4C0D62',
    width: '100%',
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
    top: 10,
  },
  imgMenu: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 20,
    top: 30,
  },
  imgPerfil: {
    borderRadius: 100,
    width: 35,
    height: 35,
    position: 'absolute',
    right: 20,
    top: 25,
  },
  dados: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  btndadosAdd: {
    borderColor: '#4C0D62',
    borderWidth: 3, 
    height: 25,
    width: 170,
    borderRadius: 3, 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  btndadosBasicos: {
    borderColor: '#4C0D62', 
    borderWidth: 3, 
    height: 25,
    width: 177,
    borderRadius: 3, 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
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
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  btnAtualizar: {
    backgroundColor: '#4C0D62',
    padding: 10,
    borderRadius: 10,
    left: -80,
     width: 150,
    height: 45,
    top: 20,
  },
  btnAtualizarText: {
    color: 'white',
    fontFamily: 'verdana',
    fontSize: 20,
    right: -25,
  },
    btnExcluir: {
    backgroundColor: '#4C0D62',
    padding: 10,
    borderRadius: 10,
    width: 150,
    height: 45,
    right: -85,
     top: -25,
  },
  btnExcluirText: {
    color: 'white',
    fontFamily: 'verdana',
     fontSize: 20,
     right: -35,
  },
});
