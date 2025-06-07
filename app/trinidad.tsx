import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Stack, Link } from 'expo-router';
import Colors from '@/constants/Colors';

export default function TrinidadScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Devociones a la Santísima Trinidad',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <Link href="/(app)/trinidad/trisagio" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Trisagio Angélico a la Santísima Trinidad</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(app)/trinidad/tedeum" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Te Deum</Text>
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