import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';

import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';

const containerStyle = {
  width: '800px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};



const Googlemap = () => {

  const [selected, setSelected] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});


  
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCiauuQCPEI2G8GuZtcaIh8tQnl2e2QkEw"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >

       
        <></>


      </GoogleMap>
    </LoadScript>
  )

}

export default Googlemap;