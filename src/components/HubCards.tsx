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
        <div className="h-full rounded-xl bg-gradient-to-br from-purple-100/40 to-blue-100/40 px-4 py-3 shadow-lg">
            <h2 className="pt-3 text-4xl font-bold">{title}</h2>
            <p className="mt-3 mb-3 max-w-xl">{description}</p>
            <div className="flex space-x-4">
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
