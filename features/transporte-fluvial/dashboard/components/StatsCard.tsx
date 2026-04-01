type Props = {
  title: string;
  value: string;
};

export function StatsCard({ title, value }: Props) {
  return (
    <div className="p-4 rounded-xl shadow bg-white">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}