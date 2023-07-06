import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Button} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useState} from 'react';
export default function App() {
  const [region, setRegion] = useState({
    latitude: 28.79912,
    longitude: -117.434,
    latitudeDelta: 0.09422,
    longitudeDelta: 0.0644,
  });

  const [markers, setMarkers] = useState([
    {
      key: 1,
      latitude: 37.78825,
      longitude: -122.4324,
      pinColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    },
    {
      key: 2,
      latitude: 37.78825,
      longitude: -122.41,
      pinColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    },
    {
      key: 3,
      latitude: 37.7881,
      longitude: -122.432,
      pinColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    },
  ]);

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
          onPress={() => moveMap(-23.5492243, -46.5813785)}
        />
        <Button
          title="DF"
          style={{margin: 4}}
          onPress={() => moveMap(-15.8080373, -47.8750231)}
        />
      </View>
      <Text>{[latLong[0], latLong[1]]}</Text>
      <StatusBar hidden={true} />
      <MapView
        onPress={e => [
          setMarkers([
            ...markers,
            {
              key: markers.length + 1,
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
              pinColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            },
          ]),
          moveMap(
            e.nativeEvent.coordinate.latitude,
            e.nativeEvent.coordinate.longitude,
          ),
        ]}
        mapType="standard"
        style={styles.mapStyle}
        region={region}>
        {markers.map(marker => (
          <Marker
            key={marker.key}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={'Marker Title'}
            description={'Marker Description'}
            image={require('./src/assets/carro.png')}
          />
        ))}
      </MapView>
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
