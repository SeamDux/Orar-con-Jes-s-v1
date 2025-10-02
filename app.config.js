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
    version: '1.0.1',
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
      versionCode: 10,
      adaptiveIcon: {
        foregroundImage: 'assets/images/android/mipmap-xxxhdpi/ic_launcher.png',
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