// Performance utilities for mobile optimization

export const isMobile = () => {
    return window.innerWidth <= 768;
};

export const isLowEndDevice = () => {
    // Check for low-end devices based on hardware concurrency and memory
    const hardwareConcurrency = navigator.hardwareConcurrency || 1;
    const memory = navigator.deviceMemory || 4;

    return hardwareConcurrency <= 2 || memory <= 2;
};

export const shouldDisable3D = () => {
    return isMobile() || isLowEndDevice();
};

export const getOptimalDPR = () => {
    if (isMobile()) {
        return [1, 1.5];
    }
    return [1, 2];
};

export const getCanvasSettings = (isMobileDevice) => {
    return {
        frameloop: 'demand',
        shadows: !isMobileDevice,
        dpr: isMobileDevice ? [1, 1.5] : [1, 2],
        gl: {
            preserveDrawingBuffer: true,
            antialias: !isMobileDevice,
            powerPreference: "high-performance",
            alpha: false,
            stencil: false,
            depth: true
        }
    };
};

export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export const throttle = (func, limit) => {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}; 