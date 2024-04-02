import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


export default function App(){
  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.subContainerA}>
        <View style={styles.imgContainer}>
          <Image source={require('./assets/imgs/logo-blue.png')} style={{width: 120, height:120}} />
        </View>
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 12}}>
          <Text style={{fontSize: 44}}>Registro</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'gray'
            }}
            placeholder={'Nombre'}
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'gray'
            }}
            placeholder={'Correo electrónico'}
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'gray'
            }}
            placeholder={'Contraseña'}
          />
        </View>
      </View>
      <View style={styles.subContainerB}>
        <Text>Holis</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#0CC0DF',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 26,
  },
  subContainerA: {
    backgroundColor: 'white',
    width: '100%',
    height: '83.333%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
  },
  subContainerB: {
    backgroundColor: 'white',
    width: '100%',
    height: '16.666%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
  },
  imgContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 26,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 34,
    paddingLeft: 36,
    paddingRight: 36,
    gap: 22
  }
})