"use client";

interface Props {
    page: number;
    total: number;
    limit: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ page, total, limit, onPageChange }: Props) => {
    const lastPage = Math.max(1, Math.ceil(total / limit));

    const pages: (number | string)[] = [];

    let start = Math.max(1, page - 2);
    let end = Math.min(lastPage, start + 4);

    if (end - start < 4) {
        start = Math.max(1, end - 4);
    }

    if (start > 1) pages.push(1);
    if (start > 2) pages.push("...");

    for (let i = start; i <= end; i++) pages.push(i);

    if (end < lastPage - 1) pages.push("...");
    if (end < lastPage) pages.push(lastPage);

    return (
        <div className="flex items-center justify-center gap-2 mt-6 text-black">

            <button
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
                className="px-3 py-1 border rounded-lg bg-white hover:bg-gray-100 disabled:opacity-40"
            >
                ←
            </button>

            {pages.map((p, i) =>
                p === "..." ? (
                    <span key={i} className="px-2 text-gray-500">...</span>
                ) : (
                    <button
                        key={i}
                        onClick={() => onPageChange(Number(p))}
                        className={`px-3 py-1 border rounded-lg transition ${page === p
                                ? "bg-black text-white"
                                : "bg-white hover:bg-gray-100"
                            }`}
                    >
                        {p}
                    </button>
                )
            )}

            <button
                disabled={page === lastPage}
                onClick={() => onPageChange(page + 1)}
                className="px-3 py-1 border rounded-lg bg-white hover:bg-gray-100 disabled:opacity-40"
            >
                →
            </button>
        </div>
    );
};