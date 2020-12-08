import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ScanScreen from './screens/ScanScreen';
import { Header } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Header
          centerComponent={{
            text: 'Bar Code Scanner',
            style: { color: 'white', fontSize: 20 },
          }}
      />
      <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Barcode-scanner.jpg/220px-Barcode-scanner.jpg',
          }}
        />
      <ScanScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    marginTop: 200
  },
});
