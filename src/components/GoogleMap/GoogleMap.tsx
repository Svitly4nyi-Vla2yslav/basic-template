import React from 'react';
import { MapContainer } from './GoogleMap.styled';


const GoogleMap: React.FC = () => {
  return (
    <MapContainer>
      <h2>Our Location</h2>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093706!2d144.9556513156641!3d-37.81731397975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d5b8e73e17c3!2sEureka%20Skydeck!5e0!3m2!1sen!2sau!4v1637899873922!5m2!1sen!2sau"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </MapContainer>
  );
};

export default GoogleMap;
