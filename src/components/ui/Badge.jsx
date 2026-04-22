export default function Badge({ children, className = "" }) {
  return <span className={`tag-chip ${className}`.trim()}>{children}</span>;
}
