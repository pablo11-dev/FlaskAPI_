import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity , Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React,{ useState } from 'react';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('./Img/logo.png')} style={styles.logo} />
      <Text style={styles.header}>Bem-Vindo(a)</Text>
    </View>
  );
}

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite   seu e-mail"
      />
      <Text style={styles.text}>Senha:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textbotao}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com')}>
      <Text style={styles.link}>Esqueceu sua senha? Cadastre-Se</Text>
      </TouchableOpacity>

      <View style={styles.icon}>
        <AntDesign name="google" size={30} color="black" />
        <FontAwesome5 name="facebook" size={30} color="black" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    

  },
  header:{
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    padding: 15,
    marginBottom: 35,
    
  },
  logo:{
    width:200,
    height:50,
    marginTop: 42,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 15,
    marginLeft: 25,
  },
  text: {
    fontSize: 14,
    color: 'black',
    marginLeft: 25,
  },
  botao: {
    padding: 12,

  },

  textbotao: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
    marginLeft: 25,
    width: '80%',
    
  },
  link: {
    fontSize: 14,
    color: 'blue',
    marginLeft: 25,
    marginTop: 10,
  },
  icon: {
    marginTop: 20,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});