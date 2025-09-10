"use client";

import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import Leaflet from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  LayersControl,
} from "react-leaflet";

type Store = {
  id: number;
  name: string;
  position: LatLngTuple;
  address?: string;
  hours?: string;
};

delete (Leaflet.Icon.Default.prototype as any)._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Map() {
  const stores: Store[] = [
    {
      id: 1,
      name: "Sana Cash N Carry Mega Store",
      position: [-13.9626, 33.7741],
      address: "Kenyatta Road, Area 4, Lilongwe",
      hours: "7:30 AM – 7:30 PM",
    },
    {
      id: 3,
      name: "Other Branch 2",
      position: [-13.95, 33.76],
      address: "Kenyatta Road, Area 4, Lilongwe",
    },
  ];

  return (
    <div className="w-full h-full rounded-[10px] relative overflow-hidden border border-primary">
      <div className="absolute top-3 left-3 bg-white shadow px-3 py-1 rounded-[10px] text-sm font-medium z-[1000]">
        Sana Cash 'n' Carry Stores Map
      </div>

      <MapContainer
        className="w-full h-full"
        center={stores[0].position}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={false}
      >
        <LayersControl position="bottomright">
          <LayersControl.BaseLayer checked name="Street Map">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Satellite">
            <TileLayer
              attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        <ZoomControl position="topright" />

        {stores.map((store) => (
          <Marker key={store.id} position={store.position} title={store.name}>
            <Popup closeButton={false}>
              <div>
                <h3 className="font-semibold text-sm text-secondary">
                  {store.name}
                </h3>
                {store.address ? (
                  <p className="text-sm">{store.address}</p>
                ) : null}
                {store.hours ? (
                  <p className="text-xs text-black/50">{store.hours}</p>
                ) : null}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
