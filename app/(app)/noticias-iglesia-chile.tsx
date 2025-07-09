import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import * as rssParser from 'react-native-rss-parser';

interface Noticia {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
  image?: string;
}

export default function NoticiasIglesiaChileScreen() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const extractImageFromContent = (content: string): string | undefined => {
    if (!content) return undefined;
    
    // Buscar imágenes en el contenido HTML
    const imgMatch = content.match(/<img[^>]+src=[\"']?([^\"' >]+)[\"']?[^>]*>/i);
    if (imgMatch && imgMatch[1]) {
      let imageUrl = imgMatch[1];
      
      // Asegurarse de que la URL sea absoluta
      if (imageUrl.startsWith('//')) {
        imageUrl = 'https:' + imageUrl;
      } else if (imageUrl.startsWith('/')) {
        imageUrl = 'https://www.iglesia.cl' + imageUrl;
      }
      
      return imageUrl;
    }
    
    return undefined;
  };

  // Función para limpiar HTML y dejar solo texto plano
  const stripHtml = (html: string): string => {
    if (!html) return '';
    return html.replace(/<[^>]+>/g, '');
  };

  const fetchNoticias = async () => {
    try {
      setError(null);
      console.log('Cargando noticias de la Iglesia en Chile...');
      
      // URL del RSS de la Iglesia en Chile
      const rssUrl = 'https://rss.app/feeds/cnTpwjbn1l999iHx.xml';
      
      // Usar proxy CORS para evitar problemas de acceso
      const corsProxy = 'https://corsproxy.io/?';
      const response = await fetch(`${corsProxy}${rssUrl}`, {
        headers: {
          'Accept': 'application/rss+xml, application/xml, text/xml',
          'User-Agent': 'OrarConJesusApp/1.0'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const text = await response.text();
      console.log('RSS recibido, longitud:', text.length);
      
      // Parsear el RSS
      const feed = await rssParser.parse(text);
      console.log('Feed parseado correctamente');
      
      if (feed.items && feed.items.length > 0) {
        const noticiasArray = feed.items.map((item: rssParser.RssItem) => {
          const content = item.content || '';
          const description = item.description || '';
          // Limpiar la descripción y limitar a 180 caracteres
          const cleanDescription = stripHtml(description).slice(0, 180);
          return {
            title: item.title || '',
            link: item.links && item.links.length > 0 ? item.links[0].url : '',
            pubDate: item.published || '',
            description: cleanDescription,
            content: content || cleanDescription,
            image: extractImageFromContent(content) || extractImageFromContent(description) || 
                   (item.enclosures && item.enclosures.length > 0 ? item.enclosures[0].url : undefined)
          };
        });
        
        setNoticias(noticiasArray);
      } else {
        throw new Error('No se encontraron noticias en el feed RSS');
      }
      
    } catch (error: any) {
      console.error('Error al cargar noticias:', error);
      setError(error.message || 'Error al cargar las noticias');
      
      // Crear noticias de ejemplo en caso de error
      setNoticias([
        {
          title: 'Conferencia Episcopal de Chile',
          link: 'https://www.iglesia.cl',
          pubDate: new Date().toISOString(),
          description: 'Sitio oficial de la Conferencia Episcopal de Chile con noticias y recursos pastorales.',
          content: 'La Conferencia Episcopal de Chile es la asamblea de los obispos de la Iglesia Católica en Chile.',
          image: 'https://www.iglesia.cl/favicon.png'
        }
      ]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchNoticias();
  };

  const handleNoticiaPress = (link: string) => {
    if (link) {
      Linking.openURL(link);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-CL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>Cargando noticias...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          title: 'Noticias de la Iglesia en Chile',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }} 
      />
      
      <ScrollView 
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {error && (
          <View style={styles.errorContainer}>
            <MaterialCommunityIcons name="alert-circle" size={24} color={Colors.error} />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        
        {noticias.length > 0 ? (
          noticias.map((noticia, index) => (
            <View key={index} style={styles.card}>
              {noticia.image && (
                <Image 
                  source={{ uri: noticia.image }} 
                  style={styles.image}
                  resizeMode="cover"
                />
              )}
              <View style={styles.cardContent}>
                <Text style={styles.title}>{noticia.title}</Text>
                <Text style={styles.date}>
                  {formatDate(noticia.pubDate)}
                </Text>
                <Text 
                  style={styles.description}
                  numberOfLines={3}
                  ellipsizeMode="tail"
                >
                  {noticia.description}
                </Text>
                <Text 
                  style={styles.leerMas}
                  onPress={() => handleNoticiaPress(noticia.link)}
                >
                  Leer más
                </Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.noNews}>
            <MaterialCommunityIcons name="newspaper" size={50} color="#ccc" />
            <Text style={styles.noNewsText}>{error || 'No hay noticias disponibles en este momento'}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.text,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    lineHeight: 20,
  },
  leerMas: {
    color: Colors.primary,
    fontWeight: '600',
    marginTop: 5,
  },
  noNews: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  noNewsText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffebee',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  errorText: {
    marginLeft: 8,
    color: Colors.error,
    fontSize: 14,
  },
}); 