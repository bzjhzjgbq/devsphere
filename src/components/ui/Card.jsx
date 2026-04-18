export default function Card({ children, strong = false, className = "" }) {
  return <div className={`${strong ? "surface-strong" : "surface"} ${className}`.trim()}>{children}</div>;
}
