import { cn } from "../../utils/cn";
import HubCards from "../HubCards";

const Buttons = [
    "📥 Download Starter Kit (PDF)",
    "🗓 7-Day Calm Plan",
    "🏤 Classroom Pack",
];

const HubSection = () => {
    return (
        <section
            className={cn(
                "mx-auto mt-3 h-72 max-w-md rounded-lg p-4",
                "sm:mt-3 sm:h-64 sm:max-w-full sm:rounded-xl sm:p-6",
                "lg:mt-2 lg:h-72 lg:max-w-7xl lg:rounded-2xl lg:p-8",
            )}
        >
            <HubCards
                title="Parent & Teacher Hub"
                description="Practical guides, printable routines, and progress insights so you can support mindfulness at home and school."
                className={cn(
                    "text-xs transition-colors duration-300 hover:bg-purple-600 hover:text-white",
                    "sm:text-sm",
                    "lg:text-lg",
                )}
                buttons={Buttons}
            />
        </section>
    );
};

export default HubSection;
