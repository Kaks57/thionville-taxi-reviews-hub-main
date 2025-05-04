
import React from 'react';

const MapLocation = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41351.90904561923!2d6.137106741796866!3d49.35815860000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795223e074d5767%3A0x92d54a7bee84d80!2sThionville%2C%20France!5e0!3m2!1sen!2sus!4v1651354764293!5m2!1sen!2sus"
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Thionville Map Location"
      ></iframe>
    </div>
  );
};

export default MapLocation;
