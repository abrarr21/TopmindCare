import Button from "./Button";

interface PlanCardsProps {
    title: string;
    description: string;
    price: string;
    points: string[];
    btnText: string;
}

const PlanCards = (props: PlanCardsProps) => {
    const { title, description, price, points, btnText } = props;
    return (
        <div className="w-[24rem] rounded-xl bg-neutral-50 shadow-xl">
            <div className="flex flex-col p-3">
                <h4 className="mt-4 text-xl font-bold text-gray-900">
                    {title}
                </h4>
                <p className="mt-3 mb-4">{description}</p>
                <h3 className="text-3xl font-extrabold text-purple-800">
                    {price}
                </h3>
                <ul className="mt-3 mb-6 self-start pl-3 text-left">
                    {points.map((p, index) => (
                        <li key={index}>{p}</li>
                    ))}
                </ul>
                <Button className="mb-3 self-center">{btnText}</Button>
            </div>
        </div>
    );
};

export default PlanCards;
