import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, useRouter } from 'expo-router';

const devociones = [
  {
    id: 'ven-espiritu-santo',
    titulo: 'Ven, Espíritu Santo',
  },
  {
    id: 'ven-espiritu-santo-creador',
    titulo: 'Ven, Espíritu Santo Creador',
  },
  {
    id: 'ven-espiritu-creador',
    titulo: 'Ven, Espíritu Creador',
  },
  {
    id: 'letanias',
    titulo: 'Letanía del Espíritu Santo',
  }
];

export default function DevocionesEspirituScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Devociones al Espíritu Santo',
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
              onPress={() => router.push(`/(app)/devociones-espiritu/${devocion.id}`)}
            >
              <Text style={styles.devocionItemTitulo}>{devocion.titulo}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones-espiritu/dones')}
          >
            <Text style={styles.devocionItemTitulo}>Los dones del Espíritu Santo</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones-espiritu/frutos')}
          >
            <Text style={styles.devocionItemTitulo}>Los frutos del Espíritu Santo</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones-espiritu/decenario')}
          >
            <Text style={styles.devocionItemTitulo}>Decenario al Espíritu Santo</Text>
          </TouchableOpacity>
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
