'use client';

import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { LatLngExpression, LatLngTuple } from 'leaflet';

interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
  markers?: (LatLngExpression | LatLngTuple)[];
}

const defaults = {
  zoom: 7,
};

const Map = (Map: MapProps) => {
  const { zoom = defaults.zoom, posix, markers = [] } = Map;

  return (
    <MapContainer center={posix} zoom={zoom} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {markers.map((pos, index) => (
        <Marker position={pos} key={`map-${index}`} draggable={false}>
          <Popup>We serve this area!</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
