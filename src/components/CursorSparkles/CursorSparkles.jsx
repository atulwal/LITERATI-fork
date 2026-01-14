import { useEffect } from "react";
import "./cursorSparkles.css";

export default function CursorSparkles() {
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const layer = document.createElement("div");
    layer.id = "sparkle-layer";
    document.body.appendChild(layer);

    const handler = (e) => {
      if (Math.random() > 0.82331) return;

      const sparkle = document.createElement("span");
      sparkle.className = "sparkle";

      sparkle.style.left = e.clientX + "px";
      sparkle.style.top = e.clientY + "px";

      const size = Math.random() * 3 + 2;
      sparkle.style.width = size + "px";
      sparkle.style.height = size + "px";

      sparkle.style.animationDuration =
        Math.random() * 0.4 + 0.6 + "s";

      layer.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1000);
    };

    window.addEventListener("mousemove", handler);

    return () => {
      window.removeEventListener("mousemove", handler);
      layer.remove();
    };
  }, []);

  return null;
}