import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

// Unbranded Vimeo player.
//
// Controls are hidden (controls=0 → no control bar / logo / badge) and we drive
// play/pause via the Vimeo SDK. To GUARANTEE Vimeo's end screen ("More from …"
// / related videos / logo) never appears, we poll the playback position while
// playing and, a hair before the clip ends, pause + rewind + bring the cover
// back — so the player never reaches the state that renders the end screen.
export default function VimeoPlayer({
  id,
  className = "",
  poster,
}: {
  id: string;
  className?: string;
  poster?: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!iframeRef.current) return;
    const player = new Player(iframeRef.current);
    playerRef.current = player;

    const stopPoll = () => {
      if (pollRef.current) clearInterval(pollRef.current);
      pollRef.current = null;
    };

    // Rewind, pause, and re-show the cover — hides Vimeo's end screen entirely.
    const reset = () => {
      stopPoll();
      player.setCurrentTime(0).catch(() => {});
      player.pause().catch(() => {});
      setPlaying(false);
      setStarted(false);
    };

    const startPoll = () => {
      stopPoll();
      pollRef.current = setInterval(async () => {
        try {
          const [t, dur] = await Promise.all([
            player.getCurrentTime(),
            player.getDuration(),
          ]);
          if (dur && dur - t <= 0.6) reset();
        } catch {
          /* ignore */
        }
      }, 200);
    };

    const onPlay = () => {
      setPlaying(true);
      setStarted(true);
      startPoll();
    };
    const onPause = () => {
      setPlaying(false);
      stopPoll();
    };

    player.on("play", onPlay);
    player.on("pause", onPause);
    player.on("ended", reset);

    return () => {
      stopPoll();
      player.off("play", onPlay);
      player.off("pause", onPause);
      player.off("ended", reset);
    };
  }, []);

  function toggle() {
    const player = playerRef.current;
    if (!player) return;
    if (playing) player.pause().catch(() => {});
    else player.play().catch(() => {});
    setStarted(true);
    setPlaying((p) => !p);
  }

  const src =
    `https://player.vimeo.com/video/${id}` +
    `?controls=0&title=0&byline=0&portrait=0&badge=0&dnt=1&playsinline=1`;

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      <iframe
        ref={iframeRef}
        src={src}
        title="Rehvamp video"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="pointer-events-none h-full w-full"
      />
      {/* Custom cover image, shown until the video is first played */}
      {poster && !started && (
        <img
          src={poster}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
      )}
      {/* Click layer + play button (covers the iframe) */}
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="group absolute inset-0"
      >
        {!playing && (
          <span className="absolute bottom-[24%] left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-green text-purple shadow-card transition-transform group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        )}
      </button>
    </div>
  );
}
