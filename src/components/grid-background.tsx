type GridBackgroundProps = {
  className?: string;
  cellSize?: number;
  // Where the grid is most visible before fading out to the edges
  fadeFrom?: "center" | "top";
};

const masks = {
  center: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 100%)",
  top: "radial-gradient(ellipse 80% 70% at 50% 0%, #000 40%, transparent 100%)",
};

export default function GridBackground({ className = "", cellSize = 56, fadeFrom = "center" }: GridBackgroundProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)",
        backgroundSize: `${cellSize}px ${cellSize}px`,
        backgroundPosition: "center top",
        maskImage: masks[fadeFrom],
        WebkitMaskImage: masks[fadeFrom],
      }}
    />
  );
}
