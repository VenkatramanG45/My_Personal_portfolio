// Performance utilities for mobile optimization
export const isMobile = () => {
    return window.innerWidth <= 768;
};

export const isLowEndDevice = () => {
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

// Check WebGL support
export const checkWebGLSupport = () => {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        return !!gl;
    } catch (e) {
        return false;
    }
};

// Check if device supports 3D rendering
export const canRender3D = () => {
    const webglSupported = checkWebGLSupport();
    const isMobileDevice = isMobile();
    const isLowEnd = isLowEndDevice();

    // Allow 3D on mobile but with reduced quality
    return webglSupported;
};

// Get device capabilities
export const getDeviceCapabilities = () => {
    return {
        isMobile: isMobile(),
        isLowEnd: isLowEndDevice(),
        webglSupported: checkWebGLSupport(),
        canRender3D: canRender3D(),
        hardwareConcurrency: navigator.hardwareConcurrency || 1,
        deviceMemory: navigator.deviceMemory || 4
    };
}; 