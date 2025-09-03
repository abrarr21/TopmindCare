import { cn } from "../utils/cn";
import Button from "./Button";

interface HubCardProps {
    title: string;
    description: string;
    buttons: string[];
    className?: string;
}

const HubCards = (props: HubCardProps) => {
    const { title, description, buttons, className } = props;
    return (
        <div
            className={cn(
                "h-full rounded-xl bg-gradient-to-br from-purple-100/40 to-blue-100/40 px-4 py-3 shadow-lg",
            )}
        >
            <h2
                className={cn(
                    "pt-3 text-2xl font-bold",
                    "sm:text-2xl",
                    "md:text-4xl",
                )}
            >
                {title}
            </h2>
            <p
                className={cn(
                    "mt-3 mb-6 max-w-xl text-sm leading-tight",
                    "sm:mb-7",
                    "md:text-md md:leading-normal",
                )}
            >
                {description}
            </p>
            <div className={cn("flex space-x-1 sm:space-x-2 lg:space-x-4")}>
                {buttons.map((btn, index) => (
                    <Button
                        key={index}
                        variant="tertiary"
                        className={cn("font-bold shadow-xl", className)}
                    >
                        {btn}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default HubCards;
