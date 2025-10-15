
export default function LoadingRing({ size = 50, thickness = 6, color = "#3498db" }) {
  const style = {
    width: size,
    height: size,
    border: `${thickness}px solid ${color}`,
    borderTop: `${thickness}px solid transparent`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  return (
    <div
      style={{
        display: "inline-block",
        ...style,
      }}
    />
  );
}
