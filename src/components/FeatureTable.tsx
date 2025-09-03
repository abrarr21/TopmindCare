import { cn } from "../utils/cn";

interface FeatureTableProps {
    title: string;
    features: string[];
    className?: string;
}

const FeatureTable = ({ title, features, className }: FeatureTableProps) => {
    return (
        <div
            className={cn(
                "mx-auto max-w-[20rem] overflow-hidden rounded-lg shadow-lg",
                "sm:w-[24rem] sm:flex-wrap",
                "md:w-[23rem]",
                className,
            )}
        >
            <table className="w-full border-collapse text-center">
                <thead>
                    <tr className="bg-purple-100/80">
                        <th className="px-2 py-3 text-center text-base text-purple-800 sm:px-3 sm:py-3 sm:text-lg md:px-4 md:py-3 md:text-xl">
                            {title}
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    {features.map((f, index) => (
                        <tr key={index} className="border-t border-gray-300">
                            <td className="px-2 py-3 text-sm text-nowrap sm:px-3 sm:py-3 sm:text-base md:px-1 md:py-3 md:text-lg">
                                {f}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeatureTable;
