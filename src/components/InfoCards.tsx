import { cn } from "../utils/cn";

interface infoCardProps {
    badge?: string;
    title: string;
    className?: string;
    className2?: string;
    description: string;
}
const InfoCards = ({
    badge,
    title,
    description,
    className,
    className2,
}: infoCardProps) => {
    return (
        <div
            className={cn(
                "w-full rounded-xl border border-gray-100 bg-white p-2 shadow-sm transition hover:shadow-md md:h-45 lg:h-40 lg:p-4",
                className2,
            )}
        >
            {badge && (
                <span className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold">
                    {badge}
                </span>
            )}
            <h3
                className={cn(
                    "mb-3 font-bold text-nowrap text-gray-800 md:text-lg lg:text-xl",
                    className,
                )}
            >
                {title}
            </h3>
            <p className="line-clamp-4 text-sm break-words text-gray-600">
                {description}
            </p>
        </div>
    );
};

export default InfoCards;
