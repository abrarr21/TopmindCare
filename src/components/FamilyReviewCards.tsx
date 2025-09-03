import { cn } from "../utils/cn";

interface FamilyReviewCardsProps {
    rating: string;
    review: string;
    reviewer: string;
}

const FamilyReviewCards = (props: FamilyReviewCardsProps) => {
    const { rating, review, reviewer } = props;
    return (
        <div
            className={cn(
                "w-72 rounded-xl p-3 shadow-md",
                "sm:w-80 sm:p-4 sm:shadow-lg",
                "md:w-60 md:p-2 md:shadow-xl",
                "lg:w-96 lg:p-5 lg:shadow-xl",
            )}
        >
            <h3 className="text-lg font-semibold">{rating}</h3>
            <p className="mt-2 mb-2 text-gray-900">{review}</p>
            <p className="text-sm text-gray-600">{reviewer}</p>
        </div>
    );
};

export default FamilyReviewCards;
