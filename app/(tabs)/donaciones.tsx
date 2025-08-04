import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack, router } from 'expo-router';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function DonacionesScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Donaciones',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 16 }}>
              <Ionicons name="arrow-back" size={24} color={Colors.white} />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="hand-holding-heart" size={64} color={Colors.primary} />
        </View>
        <Text style={styles.title}>Apoyanos!🙏</Text>
        <Text style={styles.gracias}>¡Gracias por tu generosidad!</Text>
        <Text style={styles.texto}>
          Si este proyecto te ha ayudado y quieres colaborar para que siga creciendo, 
          puedes hacer una donación voluntaria. Todo aporte ayuda a mantener y mejorar la aplicación.
        </Text>
        <TouchableOpacity style={styles.botonDonar}>
          <Text style={styles.textoBotonDonar}>Donar</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  iconContainer: {
    marginTop: 32,
    marginBottom: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  gracias: {
    fontSize: 18,
    color: Colors.success,
    fontWeight: 'bold',
    marginBottom: 18,
    textAlign: 'center',
  },
  texto: {
    fontSize: 17,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 26,
  },
  botonDonar: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 48,
    marginTop: 10,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotonDonar: {
    color: Colors.white,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
}); 