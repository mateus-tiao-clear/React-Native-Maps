import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Button} from 'react-native';
import MapView from 'react-native-maps';
import {useState} from 'react';

export default function App() {
  const [region, setRegion] = useState({
    latitude: 28.79912,
    longitude: -117.434,
    latitudeDelta: 0.09422,
    longitudeDelta: 0.0644,
  });
  const [latLong, setLatLong] = useState([]);

  const moveMap = (lat, long) => {
    setRegion({
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Button
          title="SP"
          style={{margin: 4}}
          onPress={() => moveMap(-23.9481142, -46.2843765)}
        />
        <Button
          title="DF"
          style={{margin: 4}}
          onPress={() => moveMap(-14.2145373, -42.8320211)}
        />
      </View>
      <Text>{[latLong[0], latLong[1]]}</Text>
      <StatusBar hidden={true} />
      <MapView style={styles.mapStyle} region={region} />
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
  mapStyle: {
    width: '100%',
    height: '90%',
    marginTop: 20,
  },
});
