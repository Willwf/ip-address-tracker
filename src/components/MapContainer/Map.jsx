import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";

export function Map({ latitude, longitude }) {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={17}
      style={{ height: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          Lat: {latitude} <br /> Long: {longitude}
        </Popup>
      </Marker>
      <ZoomControl position="bottomleft" />
    </MapContainer>
  );
}
