export default function EmpadronamientoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      {children}
    </div>
  );
}