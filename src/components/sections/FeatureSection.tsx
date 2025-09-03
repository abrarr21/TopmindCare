import { cn } from "../../utils/cn";
import { FeatureContent } from "../../utils/constants";
import FeatureTable from "../FeatureTable";

const FeatureSection = () => {
    return (
        <section
            className={cn(
                "mt-8 flex w-full flex-col items-center px-1",
                "sm:mt-12 sm:items-center",
                "lg:items-start",
                "lg:mt-24",
                "xl:mt-24",
            )}
        >
            <h3
                className={cn(
                    "text-md mb-5 font-extrabold text-gray-900",
                    "sm:text-xl",
                    "md:text-center md:text-2xl",
                    "lg:text-left lg:text-3xl",
                )}
            >
                Why Choose Mindery Kids Over Others?
            </h3>

            <div
                className={cn(
                    "flex flex-col",
                    "sm:justify-center sm:gap-4",
                    "md:gap-4 md:self-center",
                    "lg:flex-row lg:gap-10 lg:overflow-hidden",
                )}
            >
                {FeatureContent.map((table, index) => (
                    <div key={index} className="w-92">
                        <FeatureTable
                            title={table.title}
                            features={table.features}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureSection;
