import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const Frame3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.inicio}>
          Início
        </Text>
        <Image source={require("../assets/menu.png")} style={styles.imgMenu} />
        <Image source={require("../assets/perfil.png")} style={styles.imgPerfil} />
      </View>
      <View style={styles.btns}>
        <TouchableOpacity
          style={styles.botoes}
          onPress={() => handlebtnpressionado("Dados Pessoais")}
        >
          <Image source={require("../assets/pessoais.png")} style={styles.img} />
          <Text style={styles.txt}>Dados Pessoais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botoes}
          onPress={() => handlebtnpressionado("Dados Médicos")}
        >
          <Image source={require("../assets/sd.png")} style={styles.img} />
          <Text style={styles.txt}>Dados Médicos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botoes}
          onPress={() => handlebtnpressionado("Bloco de Notas")}
        >
          <Image source={require("../assets/bloco.png")} style={styles.img1} />
          <Text style={styles.txtbloco}>Bloco de Notas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#835691",
  },
  topo: {
    backgroundColor: "#4C0D62",
    top: -125,
    width: 450,
    height: 80,
  },
  inicio: {
    left: 200,
    top: 35,
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  imgPerfil: {
    borderRadius: 100,
    width: 35,
    height: 35,
    left: 380,
    top: -30,
  },
  imgMenu: {
    width: 30,
    height: 30,
    left: 40,
    top: 5,
  },
  btns: {
    marginTop: 30,
    alignItems: "center",
  },
  botoes: {
    backgroundColor: "#4C0D62",
    width: 250, 
    height: 150, 
    marginBottom: 20,
    alignItems: "center", 
    justifyContent: "center",
    borderRadius: 10,
  },
  txt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold", 
    marginTop: -30, 
  },
  img: {
    width: 150, 
    height: 150,
   marginTop: -30, 
  
  },
  img1: {
 width: 180, 
    height: 180,
   marginTop: -30, 
  },
  txtbloco:{
color: "white",
    fontSize: 20,
    fontWeight: "bold", 
    marginTop: -50, 
  },
});

export default Frame3;