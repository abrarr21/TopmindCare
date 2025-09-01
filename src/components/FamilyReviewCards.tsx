interface FamilyReviewCardsProps {
    rating: string;
    review: string;
    reviewer: string;
}

const FamilyReviewCards = (props: FamilyReviewCardsProps) => {
    const { rating, review, reviewer } = props;
    return (
        <div className="w-[24rem] rounded-xl bg-neutral-50 p-4 shadow-lg">
            <h3 className="text-lg">{rating}</h3>
            <p className="mt-2 mb-2 text-gray-900">{review}</p>
            <p className="text-sm text-gray-600">{reviewer}</p>
        </div>
    );
};

export default FamilyReviewCards;
