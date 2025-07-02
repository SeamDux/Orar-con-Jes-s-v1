import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function PadreNuestroScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Padre Nuestro',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Padre Nuestro</Text>
          <Text style={styles.prayer}>
            Padre nuestro, que estás en el cielo, santificado sea tu Nombre;{"\n"}
            venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo.{"\n"}
            Danos hoy nuestro pan de cada día; perdona nuestras ofensas,{"\n"}
            como también nosotros perdonamos a los que nos ofenden;{"\n"}
            no nos dejes caer en la tentación, y líbranos del mal. Amén.
          </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  prayer: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#222',
  },
}); 