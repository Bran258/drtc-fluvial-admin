import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistema DRTC FLUVIAL",
  description: "Sistema de administración y control de transporte fluvial para la DRTC. Gestión digital de permisos, empadronamientos y trámites administrativos fluviales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* Empadronamiento → izquierda (verde) */}
        <Toaster
          toasterId="left"
          position="top-left"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#16a34a",
              color: "#fff",
            },
          }}
        />

        {/* Permisos → centro (azul) */}
        <Toaster
          toasterId="center"
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#2563eb",
              color: "#fff",
            },
          }}
        />

        {/* General/Auth → derecha (gris oscuro) */}
        <Toaster
          toasterId="right"
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
