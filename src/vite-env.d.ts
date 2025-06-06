
/// <reference types="vite/client" />

declare global {
  interface Window {
    tidioChatApi?: {
      toggle: () => void;
      show: () => void;
      hide: () => void;
      open: () => void;
      close: () => void;
      isOpen?: () => boolean;
    };
    openTidioChat?: () => void;
  }
}

export {};
