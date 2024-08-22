import * as React from "react";
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { Image } from "expo-image";

export default function Frame5() {
  const [estagios, setEstagios] = useState('');
  const [alergias, setAlergias] = useState('');
  const [medicamentos, setMedicamentos] = useState('');
  const [doencas, setDoencas] = useState('');
  const [fobias, setFobias] = useState('');
   const [tipo_sang, setTiposang] = useState('');
  const [info, setInfo] = useState('');
  const handleAtualizar = () => {
    console.log("Dados atualizados:", { estagios, alergias, medicamentos, doencas, fobias, tipo_sang, info });
  };
   const handleExcluir = () => {
    console.log("Dados Excluidos:", { estagios, alergias, medicamentos, doencas, fobias, tipo_sang, info });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.titulo}>Dados Médicos</Text>
        <Image source={require("../assets/menu.png")} style={styles.imgMenu} />
        <Image source={require("../assets/perfil.png")} style={styles.imgPerfil} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Estágios"
          value={estagios}
          onChangeText={setEstagios}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Alergias"
          value={alergias}
          onChangeText={setAlergias}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Medicamentos"
          value={medicamentos}
          onChangeText={setMedicamentos}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Doenças Complementares"
          value={doencas}
          onChangeText={setDoencas}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Fobias"
          value={fobias}
          onChangeText={setFobias}
          style={styles.input}
          placeholderTextColor="white"
        />
           <TextInput
          placeholder="Tipo Sanguíneo"
          value={tipo_sang}
          onChangeText={setTiposang}
          style={styles.input}
          placeholderTextColor="white"
        />
           <TextInput
          placeholder="Outras Informações "
          value={info}
          onChangeText={setInfo}
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
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    top: -10,
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
    top: 43,
  },
  imgPerfil: {
    borderRadius: 100,
    width: 35,
    height: 35,
    position: 'absolute',
    right: 20,
    top: 40,
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
    top: 50,
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
     top: 5,
  },
  btnExcluirText: {
    color: 'white',
    fontFamily: 'verdana',
     fontSize: 20,
     right: -35,
  },
});
