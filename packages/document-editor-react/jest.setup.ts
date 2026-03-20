import '@testing-library/jest-dom';

// ResizeObserver is not available in jsdom
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// HTMLCanvasElement.getContext is not available in jsdom
HTMLCanvasElement.prototype.getContext = jest.fn();
