interface ProgramCardProps {
    image: string;
    alt?: string;
    title: string;
    description: string;
    tags?: string[];
    reverse?: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
    image,
    alt,
    title,
    description,
    tags = [],
    reverse = false,
}) => {
    return (
        <div
            className={`grid items-stretch gap-6 md:grid-cols-2 ${
                reverse ? "md:[&>div:first-child]:order-2" : ""
            }`}
        >
            {/* Image side */}
            <div className="h-full w-full">
                <img
                    src={image}
                    alt={alt || title}
                    className="h-full w-full rounded-2xl object-cover shadow-lg"
                />
            </div>

            {/* Text side */}
            <div className="flex flex-col justify-center rounded-2xl bg-white p-6 shadow-md">
                <h3 className="text-xl font-extrabold text-gray-900">
                    {title}
                </h3>
                <p className="mt-2 font-semibold text-gray-600">
                    {description}
                </p>

                {tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className="text-md rounded-full bg-gray-100/20 px-4 py-2 font-bold text-gray-700 shadow-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProgramCard;
