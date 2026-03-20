import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function TransporteFluvialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido */}
      <div className="flex flex-col flex-1">
        {/* Navbar arriba */}
        <Navbar />

        {/* Contenido debajo */}
        <main className="flex-1 bg-zinc-100 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}