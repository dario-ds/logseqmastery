"use client";

import { useEffect } from "react";

const SCRIPT_SRC = "https://embed.famewall.io/frame.js";

export function FamewallEmbed({
  src,
  format = "grid",
}: {
  src: string;
  format?: string;
}) {
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.defer = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div
      className="famewall-embed"
      data-src={src}
      data-format={format}
      style={{ width: "100%", minHeight: 300 }}
    />
  );
}
