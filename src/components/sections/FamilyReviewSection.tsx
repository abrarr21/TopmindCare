import { cn } from "../../utils/cn";
import { FamilyReviewData } from "../../utils/constants";
import FamilyReviewCards from "../FamilyReviewCards";

const FamilyReviewSection = () => {
    return (
        <section className="mt-6 p-4">
            <div className="pl-5">
                <h2
                    className={cn(
                        "mb-4 bg-white text-center font-bold",
                        "text-2xl", // base
                        "sm:text-3xl", // small screens
                        "lg:text-left",
                    )}
                >
                    What Families Say
                </h2>

                <div className="md:justfy-evenly flex sm:gap-1 md:gap-2">
                    {FamilyReviewData.map((fm, index) => (
                        <FamilyReviewCards
                            key={index}
                            rating={fm.rating}
                            review={fm.review}
                            reviewer={fm.reviewer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FamilyReviewSection;
