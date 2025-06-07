import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Stack } from 'expo-router';
import Colors from '@/constants/Colors';

export default function AntesConfesarseScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Antes de Confesarse',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Preparación para la Confesión</Text>

          <Text style={styles.category}>¿Qué es la Confesión?</Text>
          <Text style={styles.text}>
            La Confesión o Sacramento de la Reconciliación es el sacramento por el cual recibimos el perdón de Dios por nuestros pecados a través del ministerio de la Iglesia.
          </Text>

          <Text style={styles.category}>Pasos para una buena confesión</Text>
          <Text style={styles.text}>1. Examen de conciencia</Text>
          <Text style={styles.text}>2. Arrepentimiento sincero</Text>
          <Text style={styles.text}>3. Propósito de enmienda</Text>
          <Text style={styles.text}>4. Decir los pecados al sacerdote</Text>
          <Text style={styles.text}>5. Cumplir la penitencia</Text>

          <Text style={styles.category}>Acto de Contrición</Text>
          <Text style={styles.prayer}>
            Señor mío Jesucristo, Dios y Hombre verdadero, Creador, Padre y Redentor mío; por ser Vos quien sois, Bondad infinita, y porque os amo sobre todas las cosas, me pesa de todo corazón haberos ofendido; también me pesa porque podéis castigarme con las penas del infierno. Ayudado de vuestra divina gracia, propongo firmemente nunca más pecar, confesarme y cumplir la penitencia que me fuere impuesta. Amén.
          </Text>
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
    marginLeft: 20,
  },
  prayer: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 10,
    marginBottom: 20,
    lineHeight: 24,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
}); 