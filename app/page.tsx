import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">DRTC Fluvial Admin</h1>

      <ul className="space-y-3">
        <li>
          <Link href="/auth" className="text-blue-600 underline">
            Ir a Auth
          </Link>
        </li>

        <li>
          <Link href="/dashboard" className="text-blue-600 underline">
            Ir a Dashboard
          </Link>
        </li>

        <li>
          <Link href="/transporte-fluvial" className="text-blue-600 underline">
            Transporte Fluvial
          </Link>
        </li>

        <li>
          <Link
            href="/empadronamiento"
            className="text-blue-600 underline"
          >
            Empadronamiento
          </Link>
        </li>

        <li>
          <Link
            href="/permiso-operacion"
            className="text-blue-600 underline"
          >
            Permiso de Operación
          </Link>
        </li>

        <li>
          <Link
            href="/renovacion"
            className="text-blue-600 underline"
          >
            Renovación
          </Link>
        </li>
      </ul>
    </div>
  );
}