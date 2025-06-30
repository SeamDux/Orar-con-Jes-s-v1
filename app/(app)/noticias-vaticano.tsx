import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, RefreshControl, Linking } from 'react-native';
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

export default function NoticiasVaticanoScreen() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNoticias = async () => {
    setLoading(true);
    setError(null);
    try {
      const corsProxy = 'https://corsproxy.io/?';
      const rssUrl = `${corsProxy}https://www.vaticannews.va/es.rss.xml`;
      const response = await fetch(rssUrl, {
        headers: {
          'Accept': 'application/rss+xml, application/xml, text/xml',
          'User-Agent': 'OrarConJesusApp/1.0',
        },
      });
      if (!response.ok) throw new Error('No se pudo obtener el feed RSS');
      const text = await response.text();
      const feed = await rssParser.parse(text);
      const noticiasArray: Noticia[] = feed.items.map(item => {
        const content = item.content || '';
        const description = item.description || '';
        // Extraer imagen del contenido
        let image;
        const imgMatch = content.match(/<img[^>]+src=["']?([^"' >]+)["']?[^>]*>/i) || description.match(/<img[^>]+src=["']?([^"' >]+)["']?[^>]*>/i);
        if (imgMatch && imgMatch[1]) {
          image = imgMatch[1].startsWith('http') ? imgMatch[1] : `https://www.vaticannews.va${imgMatch[1]}`;
        }
        return {
          title: item.title || '',
          link: item.links && item.links[0] ? item.links[0].url : '',
          pubDate: item.published || '',
          description: description.replace(/<[^>]*>/g, '').trim(),
          content: content.replace(/<[^>]*>/g, '').trim(),
          image,
        };
      });
      setNoticias(noticiasArray);
    } catch (e: any) {
      setError('No se pudo cargar el feed de noticias del Vaticano.');
      setNoticias([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchNoticias();
  };

  function cleanTitle(title: string): string {
    // Elimina etiquetas <p>, <center>, atributos de estilo y cualquier HTML
    return title
      .replace(/<p[^>]*>/gi, '')
      .replace(/<\/p>/gi, '')
      .replace(/<center[^>]*>/gi, '')
      .replace(/<\/center>/gi, '')
      .replace(/style=\"[^\"]*\"/gi, '')
      .replace(/<[^>]*>?/gm, '')
      .trim();
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Noticias de la Iglesia - Santa Sede',
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView
        style={styles.scrollView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
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
                <Text style={styles.title}>
                  {cleanTitle(noticia.title)}
                </Text>
                <Text style={styles.date}>
                  {new Date(noticia.pubDate).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Text>
                <Text
                  style={styles.description}
                  numberOfLines={3}
                  ellipsizeMode="tail"
                >
                  {noticia.description.replace(/<[^>]*>?/gm, '')}
                </Text>
                <Text
                  style={styles.leerMas}
                  onPress={() => Linking.openURL(noticia.link)}
                >
                  Leer más
                </Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.noNews}>
            <MaterialCommunityIcons name="newspaper-remove" size={50} color="#ccc" />
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
    textAlign: 'left',
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
}); 