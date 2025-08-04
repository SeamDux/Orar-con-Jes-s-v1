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
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/android-chrome-512x512.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/images/app-store-1024pt@1x (1).png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.orarconjesus.app'
    },
    android: {
      package: 'com.orarconjesus.app',
      versionCode: 6,
      adaptiveIcon: {
        foregroundImage: './assets/images/app-store-1024pt@1x.png',
        backgroundColor: '#ffffff'
      },
      permissions: [],
      softwareKeyboardLayoutMode: "pan",
      enableProguardInReleaseBuilds: true,
      enableHermes: true,
      jsEngine: "hermes",
      targetSdkVersion: 35
    },
    web: {
      favicon: './assets/images/favicon-32x32.png',
      bundler: 'metro'
    },
    plugins: [
      'expo-font',
      'expo-router',
      [
        'expo-build-properties',
        {
          android: {
            compileSdkVersion: 35,
            targetSdkVersion: 35,
            buildToolsVersion: '35.0.0'
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