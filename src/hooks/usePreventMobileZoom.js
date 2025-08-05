import { useEffect } from 'react';

const usePreventMobileZoom = () => {
    useEffect(() => {
        // Prevent zoom on double tap
        let lastTouchEnd = 0;

        const preventZoom = (event) => {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        };

        // Prevent zoom on pinch
        const preventPinchZoom = (event) => {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        };

        // Add event listeners
        document.addEventListener('touchend', preventZoom, { passive: false });
        document.addEventListener('touchstart', preventPinchZoom, { passive: false });

        // Cleanup
        return () => {
            document.removeEventListener('touchend', preventZoom);
            document.removeEventListener('touchstart', preventPinchZoom);
        };
    }, []);
};

export default usePreventMobileZoom; 