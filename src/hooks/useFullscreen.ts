import { useEffect } from "react";

export const useFullscreen = () => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "5") {
        const doc = document.documentElement;

        // Try to enter fullscreen
        const requestFullscreen =
          doc.requestFullscreen ||
          (doc as any).webkitRequestFullscreen ||
          (doc as any).mozRequestFullScreen ||
          (doc as any).msRequestFullscreen;

        if (requestFullscreen) {
          requestFullscreen.call(doc).catch((err: Error) => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
          });
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
};
