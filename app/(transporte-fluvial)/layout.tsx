import Sidebar from "@/shared/components/Sidebar";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";

export default function TransporteFluvialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Contenedor principal */}
      <div className="flex flex-col flex-1">
        
        {/* Navbar */}
        <Navbar />

        {/* Contenido */}
        <main className="flex-1 bg-zinc-100 overflow-y-auto">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
}