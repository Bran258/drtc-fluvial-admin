import React from "react";

interface TitleHeaderProps {
  title: string;
  description?: string;
  rightContent?: React.ReactNode;
}

const TitleHeader = ({ title, description, rightContent }: TitleHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
      
      {/* IZQUIERDA */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          {title}
        </h1>
        {description && (
          <p className="text-slate-500 text-sm capitalize">
            {description}
          </p>
        )}
      </div>

      {/* DERECHA */}
      {rightContent && (
        <div className="flex flex-wrap items-center gap-3">
          {rightContent}
        </div>
      )}
    </div>
  );
};

export default TitleHeader;