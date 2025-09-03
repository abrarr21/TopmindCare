import { cn } from "../../utils/cn";
import { BuildCards } from "../../utils/constants";
import InfoCards from "../InfoCards";

const BuildSection = () => {
    return (
        <section
            className={cn(
                // Base (mobile)
                "mx-auto mt-12 h-auto max-w-full p-4",
                // Small screens (tablet)
                "sm:h-auto sm:max-w-2xl",
                // Medium screens (small laptop)
                "md:h-[54vh] md:max-w-4xl",
                // Large screens (big laptop/desktop)
                "lg:max-w-7xl",
            )}
        >
            <h2
                className={cn(
                    // Base
                    "mb-6 text-2xl font-bold text-gray-900",
                    // sm
                    "sm:mb-8 sm:text-3xl",
                    // md
                    "md:mb-8 md:text-4xl",
                )}
            >
                Build for Kids, Loved by Parents
            </h2>

            <div className="flex flex-wrap gap-5">
                {BuildCards.map((card, index) => (
                    <div
                        key={index}
                        className={cn(
                            // Base (full width on mobile)
                            "flex-shrink-0 basis-full",
                            // sm (two per row)
                            "sm:basis-[calc(50%-0.625rem)]",
                            // md (three per row)
                            "md:basis-[calc(33.333%-1.25rem)]",
                        )}
                    >
                        <InfoCards
                            title={card.title}
                            className=""
                            className2="md:h-28 md:p-2"
                            description={card.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BuildSection;
