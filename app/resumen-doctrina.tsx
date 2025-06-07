import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { Stack, Link } from 'expo-router';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function ResumenDoctrinaScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Resumen de la Doctrina Cristiana',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <View style={styles.container}>
        <Link href="/resumen-doctrina/credo" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="book-cross" size={24} color={Colors.primary} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>El Credo del Pueblo de Dios</Text>
              <Text style={styles.subtitle}>San Pablo VI, Papa</Text>
            </View>
          </TouchableOpacity>
        </Link>

        <Link href="/resumen-doctrina/mandamientos" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="tablet" size={24} color={Colors.primary} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Los Diez mandamientos de la Ley de Dios</Text>
            </View>
          </TouchableOpacity>
        </Link>

        <Link href="/resumen-doctrina/mandamientos-iglesia" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome5 name="church" size={24} color={Colors.primary} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Los mandamientos de la Iglesia</Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.light.background,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
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
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.gray,
    marginTop: 5,
  },
}); 