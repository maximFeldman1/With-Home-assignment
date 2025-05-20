type InfoRowProps = {
  icon: React.ReactNode;
  text: string;
};

export const InfoRow = ({ icon, text }: InfoRowProps) => (
  <div className="flex flex-row-reverse items-center text-sm text-gray-600 text-right">
    <span className="ml-1">{icon}</span>
    <span>{text}</span>
  </div>
);
