import React from 'react';

// A fallback component for mobile devices that can't handle 3D rendering
const MobileFallback = ({ message }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-tertiary rounded-lg p-8 shadow-card">
      <div className="text-center">
        <h3 className="text-white font-bold text-[24px]">3D Experience</h3>
        <p className="text-secondary text-[16px] mt-2">
          {message || "The 3D model is disabled on your device for better performance. Please visit on a desktop device for the full experience."}
        </p>
        <div className="mt-4">
          <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFallback;