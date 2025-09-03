import type { Benefit } from "../types";
import { cn } from "../utils/cn";

type Props = { items: Benefit[] };

const SmallCards = ({ items }: Props) => {
    return (
        <div
            className={cn(
                "flex w-full justify-evenly gap-4",
                "sm:flex sm:flex-row sm:gap-3",
                "md:flex-nowrap md:gap-1",
                "lg:mt-2 lg:justify-start lg:gap-9",
            )}
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "flex items-center justify-center gap-1 rounded-2xl bg-neutral-200/70 px-1.5 py-4 shadow-xl ring-1 ring-gray-100 md:px-2 md:py-2",
                        "sm:w-auto sm:min-w-[80px] sm:gap-4",
                    )}
                >
                    <div className="text-md sm:text-lg">{item.emoji}</div>
                    <div className="flex flex-col text-left leading-none">
                        <span className="text-xs text-gray-500 sm:text-sm">
                            {item.label}
                        </span>
                        <span className="text-xs font-bold text-gray-900 sm:text-lg">
                            {item.highlight}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SmallCards;
