import { Image, StyleSheet, useWindowDimensions } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shared asset</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image
        source={require('@acme/shared-assets/expo-background.jpg')}
        style={{ width }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
