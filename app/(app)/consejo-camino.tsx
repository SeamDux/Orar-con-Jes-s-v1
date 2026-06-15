import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, RefreshControl, TouchableOpacity, Linking, Platform } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';
import * as rssParser from 'react-native-rss-parser';

interface VideoItem {
  id: string;
  title: string;
  link: string;
  published: string;
  thumbnail: string;
}

interface Rss2JsonItem {
  title?: string;
  link?: string;
  pubDate?: string;
  guid?: string;
  thumbnail?: string;
}

const PLAYLIST_RSS = 'https://www.youtube.com/feeds/videos.xml?playlist_id=PLDFmwHW6wkBrrf050erGsLhFgGHP3r5sT';

function extractVideoId(link: string): string {
  const match = link.match(/[?&]v=([\w-]+)/);
  return match?.[1] ?? '';
}

function mapFeedItem(item: rssParser.RssItem): VideoItem {
  const link = item.links?.[0]?.url ?? '';
  const videoId = extractVideoId(link) || (item.id?.replace('yt:video:', '') ?? '');
  return {
    id: videoId,
    title: item.title || '',
    link,
    published: item.published || '',
    thumbnail: videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '',
  };
}

function mapRss2JsonItem(item: Rss2JsonItem): VideoItem {
  const link = item.link ?? '';
  const videoId = extractVideoId(link) || (item.guid?.replace('yt:video:', '') ?? '');
  return {
    id: videoId,
    title: item.title || '',
    link,
    published: item.pubDate || '',
    thumbnail: item.thumbnail || (videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : ''),
  };
}

async function fetchVideosFromFeed(): Promise<VideoItem[]> {
  const response = await fetch(PLAYLIST_RSS, {
    headers: {
      'Accept': 'application/atom+xml, application/xml, text/xml',
      'User-Agent': 'OrarConJesusApp/1.0',
    },
  });
  if (!response.ok) throw new Error('No se pudo obtener el feed de la playlist');
  const feed = await rssParser.parse(await response.text());
  return (feed.items ?? []).map(mapFeedItem);
}

async function fetchVideosFromRss2Json(): Promise<VideoItem[]> {
  const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(PLAYLIST_RSS)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('No se pudo obtener el feed de la playlist');
  const json = await response.json();
  if (json.status !== 'ok' || !json.items?.length) throw new Error('La playlist no tiene videos');
  return json.items.map(mapRss2JsonItem);
}

export default function ConsejoCaminoScreen() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchVideos = async () => {
    setLoading(true);
    setError(null);
    try {
      let videosArray: VideoItem[];
      if (Platform.OS === 'web') {
        videosArray = await fetchVideosFromRss2Json();
      } else {
        try {
          videosArray = await fetchVideosFromFeed();
        } catch {
          videosArray = await fetchVideosFromRss2Json();
        }
      }
      videosArray.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
      setVideos(videosArray);
    } catch {
      setError('No se pudo cargar la lista de videos.');
      setVideos([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchVideos();
  };

  const openYouTube = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Consejos para el Camino',
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: '#fff',
        }}
      />
      {loading ? (
        <ActivityIndicator size="large" color={Colors.primary} style={{ marginTop: 40 }} />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <ScrollView
          style={styles.scrollView}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {videos.length > 0 ? (
            videos.map((video, idx) => (
              <TouchableOpacity key={video.id + idx} style={styles.card} onPress={() => openYouTube(video.link)}>
                <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
                <View style={styles.cardContent}>
                  <Text style={styles.title}>{video.title}</Text>
                  <Text style={styles.date}>{new Date(video.published).toLocaleDateString('es-ES', {
                    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                  })}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.noVideos}>
              <Text style={styles.noVideosText}>No hay videos disponibles.</Text>
            </View>
          )}
        </ScrollView>
      )}
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
  thumbnail: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: 'left',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  error: {
    color: '#b00',
    fontSize: 16,
    margin: 20,
    textAlign: 'center',
  },
  noVideos: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  noVideosText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
  },
}); 