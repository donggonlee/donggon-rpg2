export function Button({ children, ...props }) {
  return <button className="px-3 py-1 rounded bg-yellow-700 text-white" {...props}>{children}</button>;
}