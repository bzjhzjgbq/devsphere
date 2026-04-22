export default function PageContainer({ className = "", children }) {
  return <div className={`page-shell ${className}`.trim()}>{children}</div>;
}
