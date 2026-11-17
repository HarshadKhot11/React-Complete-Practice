import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";   // required - without it the map breaks
 
export default function SimpleMap() {
  return (
	<MapContainer center={[16.7351, 73.9825]} zoom={11} style={{ height: 400 }}>
  	<TileLayer
    	attribution="&copy; OpenStreetMap contributors"
    	url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
  	/>
  	<Marker position={[16.7351, 73.9825]}>
    	<Popup>Kaurwadi Panhala Kolhapur</Popup>
  	</Marker>
	</MapContainer>
  );
}

