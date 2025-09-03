import { cn } from "../utils/cn";
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
        <div
            className={cn(
                "w-full overflow-hidden rounded-xl bg-white/60 shadow-lg backdrop-blur-md",
                // Small (≥640px)
                "sm:rounded-2xl",
            )}
        >
            <div
                className={cn(
                    "flex h-full flex-col p-4",
                    // sm
                    "sm:p-5",

                    // md
                    "md:p-6",

                    // lg
                    "lg:p-6",
                )}
            >
                <h4
                    className={cn(
                        // Base
                        "mt-2 text-xl font-bold text-gray-900",
                        // sm
                        "sm:text-xl",
                        // md
                        "md:text-2xl",
                        // lg
                        "lg:text-2xl",
                    )}
                >
                    {title}
                </h4>

                <p
                    className={cn(
                        // Base
                        "mt-1 mb-4 text-sm text-nowrap text-gray-700",
                        // sm
                        "sm:text-base",
                        // md
                        "md:text-base",
                        // lg
                        "lg:text-base",
                    )}
                >
                    {description}
                </p>

                <h3
                    className={cn(
                        "text-3xl font-extrabold text-purple-800",
                        "sm:text-3xl",
                        "lg:text-4xl",
                    )}
                >
                    {price}
                </h3>

                <ul
                    className={cn(
                        "mt-3 mb-6 truncate text-left text-sm whitespace-nowrap text-gray-700",
                        "sm:text-base",
                    )}
                >
                    {points.map((p, index) => (
                        <li key={index}>{p}</li>
                    ))}
                </ul>

                <Button
                    className={cn(
                        "mt-auto self-center px-5 py-2 text-sm",
                        "sm:px-6 sm:py-2 sm:text-base",
                        "md:px-7 md:py-3",
                        "lg:px-8 lg:py-3 lg:text-lg",
                    )}
                >
                    {btnText}
                </Button>
            </div>
        </div>
    );
};

export default PlanCards;
