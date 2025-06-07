import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Stack, Link } from 'expo-router';
import Colors from '../../constants/Colors';

export default function ConfesionScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Confesión Sacramental',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <Link href="/(app)/confesion/examen" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Examen de Conciencia</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(app)/confesion/antes" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Antes de Confesarse</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(app)/confesion/confesion" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Confesión de los Pecados</Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  menuItem: {
    backgroundColor: 'white',
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
  menuText: {
    fontSize: 18,
    color: Colors.primary,
    textAlign: 'center',
  },
}); 