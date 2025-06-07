import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Stack } from 'expo-router';
import Colors from '@/constants/Colors';

export default function ExamenConcienciaScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Examen de Conciencia',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Examen de Conciencia</Text>
          
          <Text style={styles.category}>Sobre el amor a Dios:</Text>
          <Text style={styles.text}>• ¿He dudado o negado las verdades de la fe?</Text>
          <Text style={styles.text}>• ¿He participado en prácticas supersticiosas?</Text>
          <Text style={styles.text}>• ¿He faltado a Misa los domingos por mi culpa?</Text>
          <Text style={styles.text}>• ¿He recibido la Comunión teniendo pecado mortal?</Text>

          <Text style={styles.category}>Sobre el amor al prójimo:</Text>
          <Text style={styles.text}>• ¿He dañado a otros con mis palabras o acciones?</Text>
          <Text style={styles.text}>• ¿He guardado rencor o me he negado a perdonar?</Text>
          <Text style={styles.text}>• ¿He robado o dañado los bienes ajenos?</Text>
          <Text style={styles.text}>• ¿He mentido o calumniado?</Text>

          <Text style={styles.category}>Sobre mí mismo:</Text>
          <Text style={styles.text}>• ¿He sido soberbio o vanidoso?</Text>
          <Text style={styles.text}>• ¿He sido perezoso en mis deberes?</Text>
          <Text style={styles.text}>• ¿He abusado de la comida, bebida o entretenimiento?</Text>
          <Text style={styles.text}>• ¿He sido impuro en pensamientos, palabras o acciones?</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  content: {
    padding: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.primary,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: Colors.secondary,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
}); 