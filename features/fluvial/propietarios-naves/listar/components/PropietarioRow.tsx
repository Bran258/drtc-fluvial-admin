import { Propietario } from "@/shared/api/propietario";

export const PropietarioRow = ({
    propietario,
    index,
}: {
    propietario: Propietario;
    index: number;
}) => {
    return (
        <tr className={`border-t hover:bg-gray-50 transition ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>

            <td className="px-4 py-3">{propietario.dniRuc}</td>

            <td className="px-4 py-3 font-medium text-black">
                {propietario.propietarioNombre}
            </td>

            <td className="px-4 py-3">
                <span className="px-2 py-1 rounded-md bg-gray-200 text-black text-xs">
                    {propietario.tipoPersona}
                </span>
            </td>

            <td className="px-4 py-3 text-gray-800">
                {propietario.correo || "-"}
            </td>

            <td className="px-4 py-3 text-gray-800">
                {propietario.celular || "-"}
            </td>

            <td className="px-4 py-3 text-right">
                <button className="text-black hover:underline font-medium">
                    Ver
                </button>
            </td>

        </tr>
    );
};