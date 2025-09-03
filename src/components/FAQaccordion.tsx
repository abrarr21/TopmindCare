import { useState } from "react";

interface Accordion {
    id: number;
    title: string;
    content: string;
}

interface AccordionProps {
    items: Accordion[];
}

const FAQaccordion = (props: AccordionProps) => {
    const { items } = props;
    const [open, setOpen] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpen(open === id ? null : id);
    };
    return (
        <div className="mt-8 w-full">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="rounded-lg border border-gray-300 shadow-sm"
                >
                    <button
                        onClick={() => toggle(item.id)}
                        className="flex w-full items-center justify-between p-4 text-left font-medium"
                    >
                        <span className="font-bold">{item.title}</span>
                        <span>{open === item.id ? "−" : "+"}</span>
                    </button>
                    {open === item.id && (
                        <div className="border-t border-gray-100 px-4 py-1.5 text-gray-700 transition-all duration-300 ease-in-out">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQaccordion;
