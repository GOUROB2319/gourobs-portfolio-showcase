
/// <reference types="vite/client" />

declare global {
  interface Window {
    tidioChatApi?: {
      hide: () => void;
      show: () => void;
      open: () => void;
      close: () => void;
      isOpened: () => boolean;
    };
    openTidioChat?: () => void;
  }
}

export {};
