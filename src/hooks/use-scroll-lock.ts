import { useEffect } from "react";
import { useLenis } from "lenis/react";

/**
 * Custom hook to lock/unlock page scroll when modal is open
 * Works with Lenis smooth scroll library
 * 
 * @param isLocked - Boolean to determine if scroll should be locked
 */
export function useScrollLock(isLocked: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    if (isLocked) {
      // Stop Lenis smooth scroll
      lenis.stop();
      
      // Also add overflow-hidden to body as fallback
      document.body.style.overflow = "hidden";
    } else {
      // Start Lenis smooth scroll
      lenis.start();
      
      // Remove overflow-hidden from body
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      if (lenis) {
        lenis.start();
      }
      document.body.style.overflow = "";
    };
  }, [isLocked, lenis]);
}
