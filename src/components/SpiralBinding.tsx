export default function SpiralBinding() {
  const rings = Array.from({ length: 16 }, (_, i) => i);
  return (
    <div className="spiral-col">
      {rings.map((i) => (
        <div key={i} className="spiral-ring" />
      ))}
    </div>
  );
}
