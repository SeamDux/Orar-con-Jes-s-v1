import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack, Link } from 'expo-router';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export default function ResumenDoctrinaScreen() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownloadAndSharePDF = async (url: string, title: string) => {
    try {
      setDownloading(title);
      
      // Crear nombre de archivo único
      const fileName = `${title.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.pdf`;
      const fileUri = `${FileSystem.documentDirectory}${fileName}`;
      
      console.log('Iniciando descarga de:', url);
      console.log('Guardando en:', fileUri);
      
      // Descargar el archivo
      const downloadResult = await FileSystem.downloadAsync(url, fileUri);
      
      console.log('Resultado de descarga:', downloadResult);
      
      if (downloadResult.status === 200) {
        // Verificar si se puede compartir
        const isAvailable = await Sharing.isAvailableAsync();
        
        if (isAvailable) {
          // Compartir el archivo descargado
          await Sharing.shareAsync(downloadResult.uri, {
            mimeType: 'application/pdf',
            dialogTitle: `Abrir ${title}`,
            UTI: 'com.adobe.pdf'
          });
        } else {
          // Si no se puede compartir, mostrar opciones alternativas
          Alert.alert(
            'PDF Descargado',
            `El archivo "${title}" se ha descargado correctamente.\n\nPara abrirlo:\n1. Ve a tu gestor de archivos\n2. Busca el archivo en la carpeta de la app\n3. Tócalo para abrirlo con tu lector de PDF preferido`,
            [
              { text: 'Ver en Gestor de Archivos', onPress: () => {
                // Intentar abrir el gestor de archivos
                Sharing.shareAsync(downloadResult.uri, {
                  mimeType: 'application/pdf',
                  dialogTitle: 'Abrir con aplicación'
                }).catch(() => {
                  Alert.alert('Info', 'El archivo se encuentra en la carpeta de la aplicación');
                });
              }},
              { text: 'OK' }
            ]
          );
        }
      } else {
        throw new Error(`Error en la descarga: ${downloadResult.status}`);
      }
    } catch (error) {
      console.error('Error completo:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      Alert.alert(
        'Error',
        `No se pudo descargar el documento: ${errorMessage}\n\nVerifica tu conexión a internet e inténtalo de nuevo.`,
        [{ text: 'OK' }]
      );
    } finally {
      setDownloading(null);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'La Doctrina Cristiana',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <View style={styles.container}>
        {/* Mensaje informativo */}
        <View style={styles.infoContainer}>
          <MaterialCommunityIcons name="information-outline" size={20} color={Colors.primary} style={styles.infoIcon} />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>📱 Cómo usar los PDFs</Text>
            <Text style={styles.infoText}>
              Las primeras 3 opciones descargan PDFs que puedes abrir con:
            </Text>
            <Text style={styles.infoText}>
              • <Text style={styles.bold}>Adobe Reader</Text> (recomendado)
            </Text>
            <Text style={styles.infoText}>
              • <Text style={styles.bold}>Google PDF Viewer</Text>
            </Text>
            <Text style={styles.infoText}>
              • <Text style={styles.bold}>Cualquier lector de PDF</Text> instalado
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleDownloadAndSharePDF(
            'https://multimedia.opusdei.org/pdf/es/social.pdf#page14',
            'Compendio de la Doctrina Social de la Iglesia'
          )}
          disabled={downloading !== null}
        >
          <MaterialCommunityIcons name="scale-balance" size={24} color={Colors.primary} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Compendio de la Doctrina Social de la Iglesia</Text>
            <Text style={styles.subtitle}>
              {downloading === 'Compendio de la Doctrina Social de la Iglesia' 
                ? 'Descargando...' 
                : 'Descargar y abrir PDF'
              }
            </Text>
          </View>
          {downloading === 'Compendio de la Doctrina Social de la Iglesia' && (
            <ActivityIndicator size="small" color={Colors.primary} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleDownloadAndSharePDF(
            'https://multimedia.opusdei.org/doc/pdf/catecismo20231031082545127124.pdf',
            'Catecismo de la Iglesia Católica'
          )}
          disabled={downloading !== null}
        >
          <MaterialCommunityIcons name="book-open-variant" size={24} color={Colors.primary} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Catecismo de la Iglesia Católica</Text>
            <Text style={styles.subtitle}>
              {downloading === 'Catecismo de la Iglesia Católica' 
                ? 'Descargando...' 
                : 'Descargar y abrir PDF'
              }
            </Text>
          </View>
          {downloading === 'Catecismo de la Iglesia Católica' && (
            <ActivityIndicator size="small" color={Colors.primary} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleDownloadAndSharePDF(
            'https://odnmedia.s3.amazonaws.com/files/compendio%20catecismo%20iglesia%20catolica20200102-194933.pdf',
            'Compendio del Catecismo de la Iglesia Católica'
          )}
          disabled={downloading !== null}
        >
          <MaterialCommunityIcons name="book" size={24} color={Colors.primary} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Compendio del Catecismo de la Iglesia Católica</Text>
            <Text style={styles.subtitle}>
              {downloading === 'Compendio del Catecismo de la Iglesia Católica' 
                ? 'Descargando...' 
                : 'Descargar y abrir PDF'
              }
            </Text>
          </View>
          {downloading === 'Compendio del Catecismo de la Iglesia Católica' && (
            <ActivityIndicator size="small" color={Colors.primary} />
          )}
        </TouchableOpacity>

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
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    padding: 15,
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
  infoIcon: {
    marginRight: 10,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: Colors.gray,
    marginBottom: 2,
  },
  bold: {
    fontWeight: 'bold',
  },
}); 