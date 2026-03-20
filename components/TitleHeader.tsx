import React from "react";

interface TitleHeaderProps {
  title: string;
  rightContent?: React.ReactNode; // 👈 opcional
}

const TitleHeader = ({ title, rightContent }: TitleHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-10">
      
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
        {title}
      </h1>

      {rightContent && (
        <div className="flex items-center gap-3">
          {rightContent}
        </div>
      )}

    </div>
  );
};

export default TitleHeader;