import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function AngelusScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Ángelus',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Ángelus</Text>
          <Text style={styles.prayer}>
            V. El Ángel del Señor anunció a María.{"\n"}
            R. Y concibió del Espíritu Santo.{"\n\n"}
            Dios te salve, María...{"\n\n"}
            V. He aquí la esclava del Señor.{"\n"}
            R. Hágase en mí según tu palabra.{"\n\n"}
            Dios te salve, María...{"\n\n"}
            V. Y el Verbo se hizo carne.{"\n"}
            R. Y habitó entre nosotros.{"\n\n"}
            Dios te salve, María...{"\n\n"}
            V. Ruega por nosotros, Santa Madre de Dios.{"\n"}
            R. Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo.{"\n\n"}
            Oración:{"\n\n"}
            Te suplicamos, Señor, que derrames tu gracia en nuestras almas para que los que, por el anuncio del Ángel, hemos conocido la Encarnación de tu Hijo Jesucristo, por su Pasión y Cruz seamos llevados a la gloria de su Resurrección. Por el mismo Jesucristo Nuestro Señor.{"\n\n"}
            R. Amén
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