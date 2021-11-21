import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';

Geocode.setApiKey("AIzaSyCiauuQCPEI2G8GuZtcaIh8tQnl2e2QkEw");
Geocode.enableDebug();

const containerStyle = {
    width: '800px',
    height: '400px'
};

const mapComplete = () => {

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [area, setArea] = useState("")
    const [state, setState] = useState("")
    const [longiTude, setLongitude] = useState(10);
    const [latiTude, setLatitude] = useState(10);

    const [markerLatiTude, setMarkerLatitude] = useState("");
    const [markerLongiTude, setMarkerLongitude] = useState("");


    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setLatitude(position.coords.latitude),
                    setLongitude(position.coords.longitude),
                    setMarkerLatitude(position.coords.latitude),
                    setMarkerLongitude(position.coords.longitude),
                    () => {
                        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                            response => {
                                console.log(response)
                                const address = response.results[0].formatted_address,
                                    addressArray = response.results[0].address_components,
                                    city = this.getCity(addressArray),
                                    area = this.getArea(addressArray),
                                    state = this.getState(addressArray);
                                console.log('city', city, area, state);
                                // this.setState({
                                //     address: (address) ? address : '',
                                //     area: (area) ? area : '',
                                //     city: (city) ? city : '',
                                //     state: (state) ? state : '',
                                // })
                                setAddress((address) ? address : '')
                                setArea((area) ? area : '')
                                setCity((city) ? city : '')
                                setState((state) ? state : '')

                            },
                            error => {
                                console.error(error);
                            }
                        );

                    }
            });
        } else {
            console.error("Geolocation is not supported by this browser!");
        }

    }, []);


    const getCity = (addressArray) => {
        let city = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
                city = addressArray[i].long_name;
                return city;
            }
        }
    };


   const getArea = (addressArray) => {
        let area = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0]) {
                for (let j = 0; j < addressArray[i].types.length; j++) {
                    if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
                        area = addressArray[i].long_name;
                        return area;
                    }
                }
            }
        }
    };

   const getState = (addressArray) => {
        let state = '';
        for (let i = 0; i < addressArray.length; i++) {
            for (let i = 0; i < addressArray.length; i++) {
                if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
                    state = addressArray[i].long_name;
                    return state;
                }
            }
        }
    };

    // onChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value });
    // };

   const onInfoWindowClose = (event) => { };

   const onMarkerDragEnd = (event) => {
        let newLat = event.latLng.lat(),
            newLng = event.latLng.lng();

        Geocode.fromLatLng(newLat, newLng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray);
                // this.setState({
                //     address: (address) ? address : '',
                //     area: (area) ? area : '',
                //     city: (city) ? city : '',
                //     state: (state) ? state : '',
                //     markerPosition: {
                //         lat: newLat,
                //         lng: newLng
                //     },
                //     mapPosition: {
                //         lat: newLat,
                //         lng: newLng
                //     },
                // })
                setAddress((address) ? address : '')
                setArea((area) ? area : '')
                setCity((city) ? city : '')
                setState((state) ? state : '')
                setLatitude(newLat)
                setLongitude(newLng)
                setMarkerLatitude(newLat)
                setMarkerLongitude(newLng)
            },
            error => {
                console.error(error);
            }
        );
    };


  const  onPlaceSelected = (place) => {
        console.log('plc', place);
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = this.getCity(addressArray),
            area = this.getArea(addressArray),
            state = this.getState(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();

        console.log('latvalue', latValue)
        console.log('lngValue', lngValue)

        // Set these values in the state.
        // this.setState({
        //     address: (address) ? address : '',
        //     area: (area) ? area : '',
        //     city: (city) ? city : '',
        //     state: (state) ? state : '',
        //     markerPosition: {
        //         lat: latValue,
        //         lng: lngValue
        //     },
        //     mapPosition: {
        //         lat: latValue,
        //         lng: lngValue
        //     },
        // })

        setAddress((address) ? address : '')
        setArea((area) ? area : '')
        setCity((city) ? city : '')
        setState((state) ? state : '')
        setLatitude(latValue)
        setLongitude(lngValue)
        setMarkerLatitude(latValue)
        setMarkerLongitude(lngValue)
    };



    const AsyncMap = (
        <LoadScript
            googleMapsApiKey="AIzaSyCiauuQCPEI2G8GuZtcaIh8tQnl2e2QkEw"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: latiTude, lng: longiTude }}
                zoom={15}
            >
                <Marker
                    
                    name={'Google Map Testing'}
                    draggable={true}
                    onDragEnd={onMarkerDragEnd}
                    position={{ lat: markerLatiTude, lng: markerLongiTude }}
                />

                <InfoWindow
                    onClose={this.onInfoWindowClose}
                    position={{ lat: (markerLatiTude + 0.0018), lng: markerLongiTude }}
                >
                    <div>
                        <span style={{ padding: 0, margin: 0 }}>{address}</span>
                    </div>
                </InfoWindow>
                <Marker />

                <Autocomplete
                            style={{
                                width: '100%',
                                height: '40px',
                                paddingLeft: '16px',
                                marginTop: '2px',
                                marginBottom: '2rem'
                            }}
                            onPlaceSelected={this.onPlaceSelected}
                            types={['(regions)']}
                        />
                
            </GoogleMap>
        </LoadScript>
    );



    return (
        <div style={{ padding: '1rem', margin: '0 auto', maxWidth: 1000 }}>
                <h1>Google Map Basic</h1>
                <Descriptions bordered>
                    <Descriptions.Item label="City">{city}</Descriptions.Item>
                    <Descriptions.Item label="Area">{area}</Descriptions.Item>
                    <Descriptions.Item label="State">{state}</Descriptions.Item>
                    <Descriptions.Item label="Address">{address}</Descriptions.Item>
                </Descriptions>

                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCiauuQCPEI2G8GuZtcaIh8tQnl2e2QkEw&libraries=places"
                    loadingElement={
                        <div style={{ height: `100%` }} />
                    }
                    containerElement={
                        <div style={{ height: this.state.height }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                />
            </div>
    )
}


export default mapComplete