import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack, router } from 'expo-router';

interface Devocion {
  id: string;
  titulo: string;
  ruta: string;
}

const devociones: Devocion[] = [
  {
    id: 'oracion',
    titulo: 'Oración a San José',
    ruta: '/devociones-jose/oracion'
  },
  {
    id: 'letanias',
    titulo: 'Letanías de San José',
    ruta: '/devociones-jose/letanias'
  },
  {
    id: 'siete-domingos',
    titulo: 'Siete Domingos de San José',
    ruta: '/devociones-jose/siete-domingos'
  }
];

export default function DevocionesJoseScreen() {

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Devociones a San José',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {devociones.map((devocion) => (
            <TouchableOpacity 
              key={devocion.id}
              style={styles.devocionItem}
              onPress={() => router.push(devocion.ruta)}
            >
              <Text style={styles.devocionItemTitulo}>{devocion.titulo}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
  },
  devocionItem: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  devocionItemTitulo: {
    fontSize: 22,
    color: Colors.primary,
    textAlign: 'center',
  },
});