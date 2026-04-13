import { Column } from "@/shared/components/table-pagination/DataTable";
import { Propietario } from "@/shared/api/propietario";
import { Eye, Trash2, Pencil } from "lucide-react";

type Props = {
  onDelete: (item: Propietario) => void;
  onView: (item: Propietario) => void;
  onEdit?: (item: Propietario) => void;
};

export const getPropietarioColumns = ({
  onDelete,
  onView,
  onEdit,
}: Props): Column<Propietario>[] => [
    {
      header: "DNI / RUC",
      accessor: "dniRuc",
    },
    {
      header: "Nombre",
      accessor: "propietarioNombre",
    },
    {
      header: "Tipo",
      accessor: "tipoPersona",
    },
    {
      header: "Acciones",
      render: (item) => (
        <div className="flex gap-2">
          {/* VER */}
          <button
            onClick={() => onView(item)}
            className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition"
            title="Ver"
          >
            <Eye size={16} />
          </button>

          {/* EDITAR (solo si existe) */}
          {onEdit && (
            <button
              onClick={() => onEdit(item)}
              className="p-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white transition"
              title="Editar"
            >
              <Pencil size={16} />
            </button>
          )}

          {/* ELIMINAR */}
          <button
            onClick={() => onDelete(item)}
            className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
            title="Eliminar"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];