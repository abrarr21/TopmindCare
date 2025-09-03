import { cn } from "../../utils/cn";
import { Cards } from "../../utils/constants";
import InfoCards from "../InfoCards";

const WhyMinderySection = () => {
    return (
        <section className={cn("mx-auto mt-5 max-w-7xl px-4 py-12", "lg:mt-1")}>
            <div>
                {/* Heading */}
                <h2
                    className={cn(
                        "text-2xl font-bold text-gray-900",
                        "sm:text-3xl",
                        "md:text-4xl",
                    )}
                >
                    Why Mindery Kids?
                </h2>

                <p
                    className={cn(
                        "mt-2 mb-8 max-w-2xl leading-normal text-gray-600",
                        "sm:text-md sm:mt-3 sm:leading-tight",
                        "md:mt-4 md:text-sm md:leading-relaxed",
                        "lg:text-md",
                    )}
                >
                    Children learn best through play and stories. Our sessions
                    blend gentle breathing, guided imagery, and music to make
                    mindfulness enjoyable and effective.
                </p>

                {/* Cards */}
                <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-6">
                    {Cards.map((card, index) => (
                        <InfoCards
                            key={index}
                            badge={card.badge}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyMinderySection;
