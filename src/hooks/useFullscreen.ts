import { useState, useCallback } from 'react';

interface FullscreenControls {
  toggleFullscreen: () => void;
}

export function useFullscreen(element: HTMLElement | null): [boolean, FullscreenControls] {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(!!document.fullscreenElement);

  const toggleFullscreen = useCallback(() => {
    if (!element) return;

    if (!document.fullscreenElement) {
      element.requestFullscreen().then(() => setIsFullscreen(true)).catch(console.error);
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(console.error);
    }
  }, [element]);

  return [isFullscreen, { toggleFullscreen }];
}
