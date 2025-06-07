import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const numerosRomanos = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV'];

export default function ViaCrucisScreen() {
  const estaciones = [
    { numero: 1, titulo: 'Condenan a muerte a Jesús' },
    { numero: 2, titulo: 'Jesús carga con la cruz' },
    { numero: 3, titulo: 'Cae Jesús por primera vez' },
    { numero: 4, titulo: 'Jesús encuentra a María, Su Santísima Madre' },
    { numero: 5, titulo: 'Simón ayuda a llevar la Cruz de Jesús' },
    { numero: 6, titulo: 'Una piadosa mujer enjuga el rostro de Jesús' },
    { numero: 7, titulo: 'Jesús cae por segunda vez' },
    { numero: 8, titulo: 'Jesús consuela a las mujeres de Jerusalén' },
    { numero: 9, titulo: 'Jesús cae por tercera vez' },
    { numero: 10, titulo: 'Jesús es despojado de sus vestiduras' },
    { numero: 11, titulo: 'Jesús es clavado en la cruz' },
    { numero: 12, titulo: 'Jesús muere en la cruz' },
    { numero: 13, titulo: 'Jesús es bajado de la cruz' },
    { numero: 14, titulo: 'Jesús es sepultado' },
  ];

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Vía Crucis',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.introText}>
            El Vía Crucis es una devoción que nos ayuda a meditar sobre la Pasión de Cristo. 
            A través de las 14 estaciones, seguimos los pasos de Jesús en su camino hacia el Calvario.
          </Text>

          {estaciones.map((estacion) => (
            <TouchableOpacity 
              key={estacion.numero}
              style={styles.card}
              onPress={() => router.push(`/devociones/via-crucis/estacion-${estacion.numero}`)}
            >
              <View style={styles.cardContent}>
                <View style={styles.numeroContainer}>
                  <Text style={styles.numero}>{numerosRomanos[estacion.numero - 1]}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.cardTitle}>{estacion.titulo}</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color={Colors.primary} />
              </View>
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
    padding: 16,
  },
  introText: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'justify',
    marginBottom: 20,
    lineHeight: 24,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numeroContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  numero: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: '500',
  },
}); 