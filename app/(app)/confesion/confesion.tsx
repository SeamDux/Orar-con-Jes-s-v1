import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function ConfesionPecadosScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Confesión de los Pecados',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>¿Cómo Confesarse?</Text>

          <Text style={styles.category}>Al entrar al confesionario:</Text>
          <Text style={styles.text}>1. Haz la señal de la cruz y di:</Text>
          <Text style={styles.prayer}>"Ave María Purísima. Hace (tiempo) que me confesé por última vez."</Text>

          <Text style={styles.category}>Durante la confesión:</Text>
          <Text style={styles.text}>2. Confiesa tus pecados con humildad y sinceridad</Text>
          <Text style={styles.text}>3. Escucha los consejos del sacerdote</Text>
          <Text style={styles.text}>4. Recibe la penitencia</Text>
          <Text style={styles.text}>5. Reza el Acto de Contrición</Text>

          <Text style={styles.category}>Al recibir la absolución:</Text>
          <Text style={styles.text}>6. El sacerdote te dará la absolución diciendo:</Text>
          <Text style={styles.prayer}>"Yo te absuelvo de tus pecados en el nombre del Padre, y del Hijo, y del Espíritu Santo."</Text>
          <Text style={styles.text}>7. Responde: "Amén"</Text>

          <Text style={styles.category}>Después de la confesión:</Text>
          <Text style={styles.text}>8. Da gracias a Dios por su perdón</Text>
          <Text style={styles.text}>9. Cumple la penitencia lo antes posible</Text>
          <Text style={styles.text}>10. Renueva tu propósito de no volver a pecar</Text>

          <Text style={styles.note}>
            Recuerda: El sacerdote representa a Cristo y está obligado a mantener el secreto de confesión. No tengas miedo de confesar todos tus pecados con sinceridad.
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
    marginTop: 5,
    marginBottom: 15,
    lineHeight: 24,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  note: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 24,
    padding: 15,
    backgroundColor: '#fff9e6',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: Colors.secondary,
  },
}); 