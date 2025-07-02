import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function DevocionesMariaScreen() {
  const devociones = [
    {
      id: 'santo-rosario',
      titulo: 'Santo Rosario',
      ruta: '/devociones-maria/santo-rosario'
    },
    {
      id: 'letanias',
      titulo: 'Letanías a la Santísima Virgen',
      ruta: '/devociones-maria/letanias'
    },
    {
      id: 'bajo-tu-proteccion',
      titulo: 'Bajo Tu Protección',
      ruta: '/devociones-maria/bajo-tu-proteccion'
    },
    {
      id: 'salve-regina',
      titulo: 'Salve Regina',
      ruta: '/devociones-maria/salve-regina'
    },
    {
      id: 'madre-dolorosa',
      titulo: 'Estaba la Madre Dolorosa',
      ruta: '/devociones-maria/madre-dolorosa'
    },
    {
      id: 'escapulario',
      titulo: 'Fórmula para la Bendición e Imposición del Escapulario de la Virgen del Carmen',
      ruta: '/devociones-maria/escapulario'
    },
    {
      id: 'bendita-sea',
      titulo: 'Bendita Sea Tu Pureza',
      ruta: '/devociones-maria/bendita-sea'
    },
    {
      id: 'acordaos',
      titulo: 'Acordaos (Oración de San Bernardo)',
      ruta: '/devociones-maria/acordaos'
    },
    {
      id: 'guadalupe',
      titulo: 'Oración a la Virgen de Guadalupe',
      ruta: '/devociones-maria/guadalupe'
    },
    {
      id: 'mes-maria',
      titulo: 'Oraciones del Mes de María',
      ruta: '/devociones-maria/mes-maria'
    },
    {
      id: 'lecturas-marianas',
      titulo: 'Lecturas Marianas para el Mes de María',
      ruta: '/devociones-maria/lecturas-marianas'
    },
    {
      id: 'novena-inmaculada',
      titulo: 'Novena a la Inmaculada Concepción',
      ruta: '/devociones-maria/novena-inmaculada'
    },
    {
      id: 'oracion-chile',
      titulo: 'Oración por Chile a la Virgen del Carmen',
      ruta: '/devociones-maria/oracion-chile'
    },
    {
      id: 'consagracion-diocesis',
      titulo: 'Consagración de la Diócesis de San Bernardo a la Virgen del Carmen',
      ruta: '/devociones-maria/consagracion-diocesis'
    }
  ];

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Devociones a la Virgen María',
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