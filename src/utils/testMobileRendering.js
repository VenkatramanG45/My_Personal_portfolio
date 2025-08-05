// Utility for testing mobile rendering capabilities

import { getDeviceCapabilities, getDeviceCapabilitiesSync } from './performance';

// Function to test device capabilities and log results
export const testDeviceCapabilities = async () => {
  console.log('Testing device capabilities...');
  
  // Test synchronous version
  console.log('Sync capabilities:', getDeviceCapabilitiesSync());
  
  // Test asynchronous version
  try {
    const asyncCapabilities = await getDeviceCapabilities();
    console.log('Async capabilities:', asyncCapabilities);
    return asyncCapabilities;
  } catch (error) {
    console.error('Error testing async capabilities:', error);
    return getDeviceCapabilitiesSync();
  }
};

// Function to simulate different device types for testing
export const simulateDevice = (type = 'desktop') => {
  const originalInnerWidth = window.innerWidth;
  const originalHardwareConcurrency = navigator.hardwareConcurrency;
  const originalDeviceMemory = navigator.deviceMemory;
  
  // Mock properties based on device type
  switch (type) {
    case 'mobile-low':
      Object.defineProperty(window, 'innerWidth', { value: 375 });
      Object.defineProperty(navigator, 'hardwareConcurrency', { value: 2 });
      Object.defineProperty(navigator, 'deviceMemory', { value: 2 });
      break;
    case 'mobile-high':
      Object.defineProperty(window, 'innerWidth', { value: 414 });
      Object.defineProperty(navigator, 'hardwareConcurrency', { value: 6 });
      Object.defineProperty(navigator, 'deviceMemory', { value: 8 });
      break;
    case 'tablet':
      Object.defineProperty(window, 'innerWidth', { value: 768 });
      Object.defineProperty(navigator, 'hardwareConcurrency', { value: 4 });
      Object.defineProperty(navigator, 'deviceMemory', { value: 4 });
      break;
    case 'desktop':
    default:
      Object.defineProperty(window, 'innerWidth', { value: 1920 });
      Object.defineProperty(navigator, 'hardwareConcurrency', { value: 8 });
      Object.defineProperty(navigator, 'deviceMemory', { value: 8 });
      break;
  }
  
  // Return function to restore original values
  return () => {
    Object.defineProperty(window, 'innerWidth', { value: originalInnerWidth });
    Object.defineProperty(navigator, 'hardwareConcurrency', { value: originalHardwareConcurrency });
    Object.defineProperty(navigator, 'deviceMemory', { value: originalDeviceMemory });
  };
};