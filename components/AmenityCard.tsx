interface AmenityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AmenityCard({ icon, title, description }: AmenityCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: "#ccfbf1" }}
      >
        <div className="text-teal-700 w-6 h-6">{icon}</div>
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
