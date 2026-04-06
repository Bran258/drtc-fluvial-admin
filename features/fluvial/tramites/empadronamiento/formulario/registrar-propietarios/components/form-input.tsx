interface BaseProps {
    label: string;
    className?: string;
}

type InputProps =
    | (BaseProps &
        React.InputHTMLAttributes<HTMLInputElement> & {
            isSelect?: false;
        })
    | (BaseProps &
        React.SelectHTMLAttributes<HTMLSelectElement> & {
            isSelect: true;
            children: React.ReactNode;
        });

export const FormInput = (props: InputProps) => {
    const { label, className, isSelect, ...rest } = props;

    return (
        <div className={`flex flex-col gap-2 ${className || ""}`}>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                {label}
            </label>

            {isSelect ? (
                <select
                    {...(rest as React.SelectHTMLAttributes<HTMLSelectElement>)}
                    className="w-full p-3 bg-[#F4F7F9] border border-gray-100 rounded-lg text-sm text-gray-700 outline-none focus:border-blue-300 transition-colors appearance-none"
                />
            ) : (
                <input
                    {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
                    value={rest.value ?? ""} 
                    className="w-full p-3 bg-[#F4F7F9] border border-gray-100 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-blue-300 transition-colors"
                />
            )}
        </div>
    );
};