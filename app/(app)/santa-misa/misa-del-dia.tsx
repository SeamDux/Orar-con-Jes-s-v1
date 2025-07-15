import { Platform, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';

export default function MisaDelDia() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions?.({ title: 'Misa del día' });
  }, [navigation]);

  if (Platform.OS === 'web') {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20 }}>
        <Text style={{ marginBottom: 10, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
          Misa del día
        </Text>
        <Text style={{ marginBottom: 10, textAlign: 'justify', fontSize: 15, fontWeight: 'bold' }}>
          En vivo por ISB todos los días a las 11.30 am y Domingo y días de Precepto a las 12.00 am 
        </Text>
        <button
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            padding: '10px 20px',
            fontSize: 16,
            cursor: 'pointer',
            marginBottom: 16,
          }}
          onClick={() => window.open('https://www.eucaristiadiaria.cl/dia.php', '_blank')}
        >
          Ir a eucaristiadiaria.cl
        </button>
        <button
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            padding: '10px 20px',
            fontSize: 16,
            cursor: 'pointer',
            marginBottom: 16,
          }}
          onClick={() => window.open('https://www.canalisb.cl', '_blank')}
        >
          Ir a Canal ISB
        </button>
        <div style={{ width: '100%', maxWidth: 600, height: 1200, marginTop: 20 }}>
          <iframe
            src="https://www.eucaristiadiaria.cl/dia.php"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Misa del día"
          />
        </div>
      </View>
    );
  }
  // En móvil, WebView
  return (
    <WebView
      source={{ uri: 'https://www.eucaristiadiaria.cl/dia.php' }}
      style={{ flex: 1 }}
      startInLoadingState={true}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
} 