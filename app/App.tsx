import React from 'react'
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import MapView, { Marker } from 'react-native-maps'


const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title={'title'}
          description={'some desctription'}
        />
      </MapView>
    </SafeAreaProvider>
  )
}


export default App
