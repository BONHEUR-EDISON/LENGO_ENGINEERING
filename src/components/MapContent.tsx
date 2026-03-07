"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix icons
delete (L.Icon.Default.prototype as any)._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
})

const locations = [
  { lat: -1.676, lng: 29.233, label: "Siège Goma" },
  { lat: -1.944, lng: 30.061, label: "Bureau Kigali" },
  { lat: -4.321, lng: 15.307, label: "Projet RDC" },
]

export default function MapContent() {
  return (
    <MapContainer center={[-1.676, 29.233]} zoom={6} className="h-full w-full">
      <TileLayer
        attribution='&copy; OpenStreetMap'
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