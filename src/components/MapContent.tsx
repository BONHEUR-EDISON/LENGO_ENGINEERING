'use client'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const locations = [
  { lat: -1.676, lng: 29.233, label: "Siège Goma" },
  { lat: -1.944, lng: 30.061, label: "Bureau Kigali" },
  { lat: -4.321, lng: 15.307, label: "Projet RDC" }
]

export default function MapContent() {
  return (
    <MapContainer center={[-1.676, 29.233]} zoom={6} className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc, i) => (
        <Marker key={i} position={[loc.lat, loc.lng]}>
          <Popup>{loc.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}