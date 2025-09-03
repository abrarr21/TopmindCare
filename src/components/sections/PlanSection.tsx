import { cn } from "../../utils/cn";
import { PlanCardsData } from "../../utils/constants";
import PlanCards from "../PlanCards";

const PlanSection = () => {
    return (
        <section
            className={cn(
                "mx-auto w-full px-4 py-10",
                "sm:px-6 sm:py-12",
                "lg:w-full lg:px-8 lg:py-16",
            )}
        >
            <div
                className={cn(
                    "rounded-xl bg-purple-100/70 p-5",
                    "sm:p-6",
                    "lg:p-8",
                )}
            >
                <div className="text-center">
                    <h3
                        className={cn(
                            "text-lg font-bold text-gray-900",
                            "sm:text-2xl",
                            "lg:text-3xl",
                        )}
                    >
                        Choose Your Plan
                    </h3>
                    <p className="text-md mb-6 text-gray-700 sm:mt-2 sm:mb-8 sm:text-base md:mt-2 md:text-lg">
                        Start free, cancel anytime. No hidden charges.
                    </p>

                    {/* Cards Container */}
                    <div
                        className={cn(
                            // Base & sm → 1 card centered
                            "grid grid-cols-1 justify-items-center gap-6",

                            // md → 2 cards centered
                            "md:grid-cols-2 md:gap-8",

                            // lg → 3 cards centered
                            "lg:grid-cols-3 lg:gap-10",
                        )}
                    >
                        {PlanCardsData.map((plan, index) => (
                            <div
                                key={index}
                                className={cn(
                                    // Full width on base/sm (but max width to look nice)
                                    "w-full sm:w-[80%]",

                                    // Fixed width for md and lg
                                    "md:w-[300px]",
                                )}
                            >
                                <PlanCards
                                    title={plan.title}
                                    description={plan.description}
                                    price={plan.price}
                                    points={plan.points}
                                    btnText={plan.btnText}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlanSection;
