import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack } from 'expo-router';

export default function CreditosScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Créditos',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Créditos</Text>

          <Text style={styles.sectionTitle}>Publicado por</Text>
          <Text style={styles.texto}>Ediciones Obispado de San Bernardo</Text>
          <Text style={styles.textoSmall}>Freire 508, local 10. San Bernardo - Región Metropolitana, Chile</Text>

          <Text style={styles.sectionTitle}>Pedidos en físico</Text>
          <Text style={styles.textoBold}>Librería San Bernardo</Text>
          <Text style={styles.textoSmall}>Freire 508, local 10. San Bernardo</Text>
          <Text style={styles.textoSmall}>Tel: (56) (2) 28592347</Text>
          <Text style={styles.textoSmall}>Mail: libreriasanbernardo@gmail.com</Text>
          <Text style={styles.textoSmall}>www.libreriasanbernardo.cl</Text>

          <View style={styles.separator} />

          <Text style={styles.textoBold}>Librería Purísima del Maipo</Text>
          <Text style={styles.textoSmall}>J.J. Pérez 220. Buin.</Text>
          <Text style={styles.textoSmall}>Tel: (56) (2) 28216835</Text>
          <Text style={styles.textoSmall}>Mail: libreriacatolicabuin@gmail.com</Text>
          <Text style={styles.textoSmall}>www.libreriapurisima.cl</Text>

          <View style={styles.separator} />

          <Text style={styles.sectionTitle}>Aprobación</Text>
          <Text style={styles.textoSmall}>Con aprobación eclesiástica</Text>
          <Text style={styles.textoSmall}>Edición digital 2025</Text>

          <View style={styles.separator} />

          <Text style={styles.sectionTitle}>Agradecimientos</Text>
          <Text style={styles.textoSmall}>Se agradece especialmente a las siguientes páginas y fuentes por su aporte y recursos:</Text>
          <Text style={styles.link}>iglesia.cl</Text>
          <Text style={styles.link}>eucaristiadiaria.cl</Text>
          <Text style={styles.link}>obispadodesanbernardo.cl</Text>
          <Text style={styles.link}>biblialiturgia.com</Text>
          <Text style={styles.link}>vaticannews.va</Text>

          <View style={styles.separator} />

          <Text style={styles.sectionTitle}>Derechos</Text>
          <Text style={styles.textoSmall}>Copyright Ediciones Obispado de San Bernardo (en papel)</Text>
          <Text style={styles.textoSmall}>ISBN 978-956-8430-18-4</Text>
          <Text style={styles.textoSmall}>Impreso en AImpresores</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 500,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginTop: 18,
    marginBottom: 4,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 2,
  },
  textoSmall: {
    fontSize: 15,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 2,
  },
  textoBold: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 2,
  },
  separator: {
    height: 16,
  },
  link: {
    fontSize: 15,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 2,
    textDecorationLine: 'underline',
  },
}); 