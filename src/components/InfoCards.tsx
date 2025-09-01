interface infoCardProps {
    badge?: string;
    title: string;
    description: string;
}
const InfoCards = ({ badge, title, description }: infoCardProps) => {
    return (
        <div className="h-40 w-full rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md">
            {badge && (
                <span className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                    {badge}
                </span>
            )}
            <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
            <p className="line-clamp-4 text-sm break-words text-gray-600">
                {description}
            </p>
        </div>
    );
};

export default InfoCards;

{
    /* <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md"> {badge && ( <span className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800"> {badge} </span> )} <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3> <p className="max-w-sm text-sm break-words text-gray-600"> {description} </p> </div> */
}
