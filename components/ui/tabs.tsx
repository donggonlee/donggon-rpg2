export function Tabs({ children }) {
  return <div>{children}</div>;
}
export function TabsList({ children, className }) {
  return <div className={className}>{children}</div>;
}
export function TabsTrigger({ children, ...props }) {
  return <button className="p-1 border" {...props}>{children}</button>;
}
export function TabsContent({ children }) {
  return <div className="mt-2">{children}</div>;
}