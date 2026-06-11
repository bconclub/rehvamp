import { Link } from "react-router-dom";
import { Leaf } from "./Icons";

const MESSAGE = "Join the REHVAMP 3-Month Digital Well-Being Challenge";

export default function AnnouncementBar() {
  const items = Array.from({ length: 8 });
  return (
    <Link
      to="/challenge"
      className="block overflow-hidden bg-green text-white"
      aria-label={MESSAGE}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap py-2">
        {[0, 1].map((g) => (
          <div key={g} className="flex shrink-0">
            {items.map((_, i) => (
              <span
                key={`${g}-${i}`}
                className="mx-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                <Leaf className="h-3.5 w-3.5 text-white" />
                {MESSAGE}
              </span>
            ))}
          </div>
        ))}
      </div>
    </Link>
  );
}
