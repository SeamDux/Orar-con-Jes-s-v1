module.exports = {
  expo: {
    updates: {
      url: "https://u.expo.dev/bf6414f8-8793-416a-a967-8141f890fb15",
      fallbackToCacheTimeout: 0
    },
    runtimeVersion: {
      policy: "appVersion"
    },
    extra: {
      eas: {
        projectId: 'bf6414f8-8793-416a-a967-8141f890fb15'
      }
    },
    name: 'Orar con Jesús',
    slug: 'orarconjesus',
    version: '1.0.2',
    orientation: 'portrait',
    icon: './assets/images/android-chrome-512x512.png',
    userInterfaceStyle: 'light',
    splash: {
      image: 'assets/images/android/playstore-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.orarconjesus.app',
      buildNumber: "3"
    },
    android: {
      package: 'com.orarconjesus.app',
      versionCode: 16,
      adaptiveIcon: {
        foregroundImage: 'assets/images/android/mipmap-xxxhdpi/ic_launcher.png',
        backgroundColor: '#ffffff'
      },
      permissions: [],
      softwareKeyboardLayoutMode: "pan",
      enableProguardInReleaseBuilds: true,
      enableHermes: true,
      jsEngine: "hermes",
      targetSdkVersion: 35,
      // 16 kB: la build está bien (NDK 28, useLegacyPackaging false). Para cumplir con Play Store
      // hace falta Expo SDK 53+ (las .so de SDK 52 no están alineadas a 16 kB). Ver: expo/expo#37440
      supportsRtl: true,
      allowBackup: false
    },
    web: {
      favicon: './assets/images/favicon-32x32.png',
      bundler: 'metro'
    },
    plugins: [
      'expo-font',
      'expo-router',
      'expo-web-browser',
      [
        'expo-build-properties',
        {
          android: {
            compileSdkVersion: 35,
            targetSdkVersion: 35,
            buildToolsVersion: '35.0.0',
            ndkVersion: '28.0.12674087',
            abiFilters: ['arm64-v8a'],
            packagingOptions: {
              jniLibs: {
                useLegacyPackaging: false  // necesario para 16 kB (libs sin comprimir, alineables)
              }
            },
            // 16 kB: con SDK 53+ las libs nativas vienen alineadas; en SDK 52 Play sigue avisando
            enableProguardInReleaseBuilds: true,
            enableShrinkResourcesInReleaseBuilds: true,
            proguardFiles: ['proguard-rules.pro'],
            // Configuración de memoria optimizada
            dexOptions: {
              javaMaxHeapSize: '4g'
            }
          }
        }
      ]
    ],
    scheme: 'orarconjesus',
    experiments: {
      tsconfigPaths: true
    },
    hooks: {
      postPublish: [
        {
          file: "sentry-expo/upload-sourcemaps",
          config: {
            organization: "orarconjesus",
            project: "orarconjesus"
          }
        }
      ]
    }
  }
}; 