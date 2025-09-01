import { FamilyReviewData } from "../../utils/constants";
import FamilyReviewCards from "../FamilyReviewCards";

const FamilyReviewSection = () => {
    return (
        <section className="mx-auto mt-6 h-60 max-w-7xl p-4">
            <div className="h-full pl-5">
                <h2 className="mb-4 text-4xl font-bold">What Families Say</h2>
                <div className="flex gap-6">
                    {FamilyReviewData.map((fm, index) => (
                        <div key={index} className="shadow-md">
                            <FamilyReviewCards
                                rating={fm.rating}
                                review={fm.review}
                                reviewer={fm.reviewer}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FamilyReviewSection;
