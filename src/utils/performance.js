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
    
    // Disable 3D on low-end mobile devices
    if (isMobileDevice && isLowEnd) {
        return false;
    }
    
    // Check for mobile device with poor performance indicators
    if (isMobileDevice) {
        // Additional checks for mobile performance
        const hardwareConcurrency = navigator.hardwareConcurrency || 1;
        const memory = navigator.deviceMemory || 4;
        
        // More strict requirements for mobile
        if (hardwareConcurrency <= 4 || memory <= 4) {
            // Check if device is in battery saving mode (if available)
            if (navigator.getBattery) {
                return navigator.getBattery().then(battery => {
                    return !battery.charging && battery.level < 0.3 ? false : webglSupported;
                }).catch(() => webglSupported);
            }
        }
    }
    
    return webglSupported;
};

// Get device capabilities
export const getDeviceCapabilities = async () => {
    const isMobileDevice = isMobile();
    const isLowEndDevice = isLowEndDevice();
    const webglSupported = checkWebGLSupport();
    
    // Handle the potentially async canRender3D function
    let can3DRender = webglSupported;
    
    // Disable 3D on low-end mobile devices immediately
    if (isMobileDevice && isLowEndDevice) {
        can3DRender = false;
    } else if (isMobileDevice) {
        // Additional checks for mobile performance
        const hardwareConcurrency = navigator.hardwareConcurrency || 1;
        const memory = navigator.deviceMemory || 4;
        
        // More strict requirements for mobile
        if (hardwareConcurrency <= 4 || memory <= 4) {
            // Check if device is in battery saving mode (if available)
            if (navigator.getBattery) {
                try {
                    const battery = await navigator.getBattery();
                    can3DRender = !(!battery.charging && battery.level < 0.3);
                } catch (e) {
                    // If battery API fails, fall back to WebGL check
                    can3DRender = webglSupported;
                }
            }
        }
    }
    
    return {
        isMobile: isMobileDevice,
        isLowEnd: isLowEndDevice,
        webglSupported: webglSupported,
        canRender3D: can3DRender,
        hardwareConcurrency: navigator.hardwareConcurrency || 1,
        deviceMemory: navigator.deviceMemory || 4
    };
};

// Synchronous version for backward compatibility
export const getDeviceCapabilitiesSync = () => {
    return {
        isMobile: isMobile(),
        isLowEnd: isLowEndDevice(),
        webglSupported: checkWebGLSupport(),
        canRender3D: checkWebGLSupport() && !(isMobile() && isLowEndDevice()),
        hardwareConcurrency: navigator.hardwareConcurrency || 1,
        deviceMemory: navigator.deviceMemory || 4
    };
};