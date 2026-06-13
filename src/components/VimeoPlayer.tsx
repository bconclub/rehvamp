import { useEffect, useRef, useState } from "react";

// Unbranded Vimeo player.
//
// Vimeo's logo lives inside the control bar, and there's no embed param to
// remove just the logo. So we hide the controls entirely (controls=0 → no
// control bar, no logo, no badge) and drive play/pause ourselves through the
// player's postMessage API. Clicking anywhere on the video toggles playback;
// a green play button shows while paused.
export default function VimeoPlayer({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [playing, setPlaying] = useState(false);

  const ORIGIN = "https://player.vimeo.com";

  function post(method: string, value?: string) {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify(value === undefined ? { method } : { method, value }),
      ORIGIN
    );
  }

  // Ask the player to emit play/pause/ended back to us so our button stays in
  // sync (e.g. resets to "play" when the clip ends).
  function subscribe() {
    post("addEventListener", "play");
    post("addEventListener", "pause");
    post("addEventListener", "ended");
  }

  // Keep our button state in sync if playback ends or changes inside Vimeo.
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== ORIGIN) return;
      let data: { event?: string };
      try {
        data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }
      if (data.event === "play") setPlaying(true);
      if (data.event === "pause" || data.event === "ended") setPlaying(false);
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  function toggle() {
    if (playing) post("pause");
    else post("play");
    setPlaying((p) => !p);
  }

  const src =
    `${ORIGIN}/video/${id}` +
    `?controls=0&title=0&byline=0&portrait=0&badge=0&dnt=1&playsinline=1`;

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      <iframe
        ref={iframeRef}
        src={src}
        title="Rehvamp video"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        onLoad={subscribe}
        className="pointer-events-none h-full w-full"
      />
      {/* Click layer + play button (covers the iframe) */}
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="group absolute inset-0 flex items-center justify-center"
      >
        {!playing && (
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green text-purple shadow-card transition-transform group-hover:scale-110">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        )}
      </button>
    </div>
  );
}
