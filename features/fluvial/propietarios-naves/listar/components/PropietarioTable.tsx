import { Propietario } from "@/shared/api/propietario";
import { PropietarioRow } from "./PropietarioRow";

export const PropietarioTable = ({ data }: { data: Propietario[] }) => {
    const safeData = Array.isArray(data) ? data : [];

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

            {/* HEADER */}
            <div className="px-6 py-4 border-b bg-gray-50">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-base font-semibold text-black">
                            Lista de propietarios
                        </h2>
                        <p className="text-sm text-gray-600">
                            Registro general del sistema
                        </p>
                    </div>

                    <span className="text-xs px-3 py-1 rounded-full bg-black text-white">
                        {safeData.length} registros
                    </span>
                </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-black">

                    <thead className="bg-gray-100 text-black">
                        <tr>
                            {[
                                "DNI / RUC",
                                "Nombre",
                                "Tipo",
                                "Correo",
                                "Celular",
                                "Acciones",
                            ].map((title) => (
                                <th
                                    key={title}
                                    className="px-5 py-3 text-left font-semibold"
                                >
                                    {title}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {safeData.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center py-10 text-gray-500">
                                    No hay propietarios registrados
                                </td>
                            </tr>
                        ) : (
                            safeData.map((item, index) => (
                                <PropietarioRow
                                    key={item.id}
                                    propietario={item}
                                    index={index}
                                />
                            ))
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    );
};