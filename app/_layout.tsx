import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { Platform, View } from 'react-native';
import Colors from '@/constants/Colors';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <ThemeProvider value={DefaultTheme}>
            <Stack
              screenOptions={{
                headerStyle: {
                  backgroundColor: Colors.primary,
                },
                headerTintColor: Colors.white,
                headerTitleStyle: {
                  fontWeight: '600',
                  fontSize: 18,
                },
                headerShadowVisible: false,
                contentStyle: {
                  backgroundColor: Colors.background,
                },
                animation: Platform.select({
                  ios: 'default',
                  android: 'fade'
                }),
                animationDuration: 200,
              }}
            >
              <Stack.Screen 
                name="index" 
                options={{
                  title: 'Orar con Jesús',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="adoracion/index"
                options={{
                  title: 'Adoración',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="liturgia/index"
                options={{
                  title: 'Liturgia',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="calendario/index"
                options={{
                  title: 'Calendario',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="santoral/index"
                options={{
                  title: 'Santoral',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="virtudes/index"
                options={{
                  title: 'Virtudes',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="resumen-doctrina"
                options={{
                  title: 'Resumen de Doctrina',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="sacramentos/index"
                options={{
                  title: 'Sacramentos',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="vida-cristiana/index"
                options={{
                  title: 'Vida Cristiana',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="oraciones"
                options={{
                  title: 'Oraciones',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="oficio-del-dia"
                options={{
                  title: 'Oficio del Día',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="oraciones-noche"
                options={{
                  title: 'Oraciones de la Noche',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="santa-misa/index"
                options={{
                  title: 'Santa Misa',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="noticias/index"
                options={{
                  title: 'Noticias',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="confesion/index"
                options={{
                  title: 'Confesión',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="trinidad"
                options={{
                  title: 'Trinidad',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="devociones-jesus"
                options={{
                  title: 'Devociones a Jesús',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="devociones-espiritu"
                options={{
                  title: 'Devociones al Espíritu Santo',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="devociones-maria"
                options={{
                  title: 'Devociones a María',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="devociones-jose"
                options={{
                  title: 'Devociones a San José',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="devociones-moribundo"
                options={{
                  title: 'Devociones para Moribundos',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="oraciones-difuntos"
                options={{
                  title: 'Oraciones por Difuntos',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="novenas/index"
                options={{
                  title: 'Novenas',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="bendiciones/index"
                options={{
                  title: 'Bendiciones',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="oraciones-diversas/index"
                options={{
                  title: 'Oraciones Diversas',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="jubileo"
                options={{
                  title: 'Jubileo 2025',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="cantoral/index"
                options={{
                  title: 'Cantoral',
                  headerShown: true,
                }}
              />
              <Stack.Screen 
                name="buscar"
                options={{
                  title: 'Buscar',
                  headerShown: true,
                }}
              />
            </Stack>
          </ThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}
