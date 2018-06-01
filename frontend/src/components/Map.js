import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';
import MapOptions from './MapOptions';
import '../style/Map.css';
export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    users: [],
    markerinfo: {
      name: null,
      phone: null
    }
    };
  }
    componentWillMount(){
      axios.get('http://127.0.0.1:3060/users').then(response => this.setState({users: response.data}));
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          center:{
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
          error: null,
        });
        console.log(this.state.center);
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      markerinfo: {name: marker.data.name,
        phone: marker.data.phone
      }
    });

    onMarkerOut = (props, marker, e) =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });
  render() {
    return (
    <div>   
      <div className="col" id="mapCol">
        <div className="col" id="MapContainer">
          <Map google={this.props.google} center={this.state.center} zoom={8}>
            {this.state.users.slice().map((info)=>
              <Marker key={info.id}
                data={info}
                onClick={this.onMarkerClick.bind(this)}
                position={{lat: info.latitude, lng: info.langitude}} />
            )} 
            <InfoWindow
                onOpen={this.windowHasOpened}
                onClose={this.windowHasClosed}
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.markerinfo.name}</h1>
              <h2>{this.state.markerinfo.phone}</h2>
            </div>
        </InfoWindow>
          </Map>
        </div>
      </div>
    </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyC1iaNTgDYqktTvGu7ddg3xKKHY8j3Jtu4'
})(MapContainer)