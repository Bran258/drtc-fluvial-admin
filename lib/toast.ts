import toast from "react-hot-toast";

// 🔹 EMPADRONAMIENTO
export const toastEmpadronamiento = {
    success: (msg: string, id?: string) =>
        toast.success(msg, {
            id,
            toasterId: "left",
        }),

    error: (msg: string, id?: string) =>
        toast.error(msg, {
            id,
            toasterId: "left",
        }),

    loading: (msg: string) =>
        toast.loading(msg, { toasterId: "left" }),
};

// 🔹 PERMISOS
export const toastPermisos = {
    success: (msg: string) =>
        toast.success(msg, { toasterId: "center" }),

    error: (msg: string) =>
        toast.error(msg, { toasterId: "center" }),

    loading: (msg: string) =>
        toast.loading(msg, { toasterId: "center" }),
};

// 🔹 GENERAL / AUTH
export const toastGeneral = {
    success: (msg: string) =>
        toast.success(msg, { toasterId: "right" }),

    error: (msg: string) =>
        toast.error(msg, { toasterId: "right" }),

    loading: (msg: string) =>
        toast.loading(msg, { toasterId: "right" }),
};