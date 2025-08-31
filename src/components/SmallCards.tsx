import type { Benefit } from "../types";

type Props = { items: Benefit[] };

const SmallCards = ({ items }: Props) => {
    return (
        <div className="flex gap-5">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex min-w-[125px] items-center justify-center gap-4 rounded-2xl bg-white px-2 py-3 shadow-lg ring-1 ring-gray-100"
                >
                    <div className="text-lg">{item.emoji}</div>
                    <div className="flex flex-col text-left leading-none">
                        <span className="text-sm text-gray-500">
                            {item.label}
                        </span>
                        <span className="text-xl font-bold text-gray-900">
                            {item.highlight}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SmallCards;
