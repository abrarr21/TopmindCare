import { cn } from "../../utils/cn";
import { BuildCards } from "../../utils/constants";
import InfoCards from "../InfoCards";

const BuildSection = () => {
    return (
        <section
            className={cn(
                "mx-auto mt-12 h-auto max-w-full p-4",
                "sm:h-[68vh] sm:max-w-2xl",
                "md:h-[33vh] md:max-w-4xl",
                "lg:h-[65vh] lg:max-w-7xl",
            )}
        >
            <h2
                className={cn(
                    "mb-6 text-2xl font-bold text-gray-900",
                    "sm:mb-8 sm:text-3xl",
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
                            "flex-shrink-0 basis-full",
                            "sm:basis-[calc(50%-0.625rem)]",
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
