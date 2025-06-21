import React from 'react';
import { StyleSheet, View, ScrollView, Linking, Platform } from 'react-native';
import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function AcercaDeScreen() {
  const handleDonate = () => {
    // Reemplaza con tu enlace de donación
    const donateUrl = 'https://tupagina.com/donar';
    Linking.openURL(donateUrl).catch(err => 
      console.error('Error al abrir el enlace de donación:', err)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Acerca de Orar con Jesús</Text>
          
          <View style={styles.section}>
            <Text style={styles.subtitle}>Nuestra Misión</Text>
            <Text style={styles.text}>
              Orar con Jesús es una aplicación creada para fomentar la oración y el crecimiento espiritual 
              a través de recursos católicos, reflexiones diarias y el seguimiento del calendario litúrgico.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Soporte y Donaciones</Text>
            <Text style={styles.text}>
              Si deseas apoyar nuestro ministerio y el desarrollo de esta aplicación, considera hacer una donación. 
              Tu contribución nos ayuda a mantener y mejorar este servicio para toda la comunidad.
            </Text>
            
            <View style={styles.donateButton} onTouchEnd={handleDonate}>
              <MaterialIcons name="favorite" size={20} color="white" style={styles.donateIcon} />
              <Text style={styles.donateText}>Hacer una donación</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.version}>Versión 1.0.0</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: Colors.primary,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: Colors.primary,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: Colors.text,
  },
  donateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 8,
    alignSelf: 'center',
  },
  donateText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  donateIcon: {
    marginRight: 4,
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
  },
  version: {
    fontSize: 14,
    color: 'gray',
  },
});
