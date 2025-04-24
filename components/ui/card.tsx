export function Card({ children, ...props }) {
  return <div className="p-2 rounded border" {...props}>{children}</div>;
}
export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}