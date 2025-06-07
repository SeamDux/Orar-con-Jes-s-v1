import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';
import Background from '@/components/Background';

export default function JubileoScreen() {
  return (
    <Background imageSource={require('@/assets/images/jubileo-background.png')}>
      <Stack.Screen
        options={{
          title: 'Jubileo de la Esperanza 2025',
          headerStyle: {
            backgroundColor: '#006400',
          },
          headerTintColor: '#ffffff',
        }}
      />
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView}>
        <BlurView intensity={80} style={styles.content}>
          <Text style={styles.title}>Oración del Jubileo de la Esperanza 2025</Text>
          
          <Text style={styles.prayer}>
            Padre que estás en el cielo,{"\n"}
            la fe que nos has donado en{"\n"}
            tu Hijo Jesucristo, nuestro hermano,{"\n"}
            y la llama de <Text style={{fontStyle: 'italic'}}>caridad</Text>{"\n"}
            infundida en nuestros corazones por el Espíritu Santo,{"\n"}
            despierten en nosotros la bienaventurada <Text style={{fontStyle: 'italic'}}>esperanza</Text>{"\n"}
            en la venida de tu Reino.{"\n\n"}
            Tu gracia nos transforme{"\n"}
            en dedicados cultivadores de las semillas del Evangelio{"\n"}
            que fermenten la humanidad y el cosmos,{"\n"}
            en espera confiada{"\n"}
            de los cielos nuevos y de la tierra nueva,{"\n"}
            cuando vencidas las fuerzas del mal,{"\n"}
            se manifestará para siempre tu gloria.{"\n\n"}
            La gracia del Jubileo{"\n"}
            reavive en nosotros, <Text style={{fontStyle: 'italic'}}>Peregrinos de Esperanza</Text>,{"\n"}
            el anhelo de los bienes celestiales{"\n"}
            y derrame en el mundo entero{"\n"}
            la alegría y la paz{"\n"}
            de nuestro Redentor.{"\n"}
            A ti, Dios bendito eternamente,{"\n"}
            sea la alabanza y la gloria por los siglos.{"\n"}
            Amén.
          </Text>
        </BlurView>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  prayer: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#444',
  },
}); 