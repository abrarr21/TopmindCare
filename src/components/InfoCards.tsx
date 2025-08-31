interface infoCardProps {
    badge?: string;
    title: string;
    description: string;
}
const InfoCards = ({ badge, title, description }: infoCardProps) => {
    return (
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md">
            <span className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                {badge}
            </span>
            <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
};

export default InfoCards;
