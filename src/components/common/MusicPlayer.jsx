import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router";

const TRACKS = {
  "/": "/audio/main-song.mp3",
  "/our-story": "/audio/main-song.mp3",
  "/memories": "/audio/memory-song.mp3",
  "/reasons": "/audio/main-song.mp3",
  "/letter": "/audio/main-song.mp3",
  "/final-surprise": "/audio/final-song.mp3",
};

export default function MusicPlayer() {
  const location = useLocation();
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(() => {
    return sessionStorage.getItem("music-playing") === "true";
  });

  const [hasStarted, setHasStarted] = useState(() => {
    return sessionStorage.getItem("music-started") === "true";
  });

  const currentTrack = useMemo(() => {
    return TRACKS[location.pathname] || "/audio/main-song.mp3";
  }, [location.pathname]);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const previousTrack = audio.getAttribute("data-track");

    if (previousTrack !== currentTrack) {
      audio.src = currentTrack;
      audio.setAttribute("data-track", currentTrack);

      const savedTime = sessionStorage.getItem(`music-time-${currentTrack}`);
      audio.currentTime = savedTime ? Number(savedTime) : 0;

      if (hasStarted && isPlaying) {
        audio.play().catch((error) => {
          console.error("Track switch play failed:", error);
        });
      }
    }
  }, [currentTrack, hasStarted, isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        sessionStorage.setItem(
          `music-time-${currentTrack}`,
          String(audioRef.current.currentTime)
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTrack]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        sessionStorage.setItem("music-playing", "false");
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
        setHasStarted(true);
        sessionStorage.setItem("music-started", "true");
        sessionStorage.setItem("music-playing", "true");
      }
    } catch (error) {
      console.error("Music play failed:", error);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop data-track={currentTrack} src={currentTrack} />

      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-300 transition hover:scale-105 hover:bg-rose-600"
      >
        {isPlaying ? "Pause Music ⏸" : "Play Music 🎵"}
      </button>
    </>
  );
}