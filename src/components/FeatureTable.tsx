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
                "w-[26rem] max-w-md overflow-hidden rounded-lg shadow-lg",
                className,
            )}
        >
            <table className="w-full border-collapse text-center">
                <thead>
                    <tr className="bg-purple-100/80">
                        <th className="px-4 py-3 text-center font-bold text-purple-800">
                            {title}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {features.map((f, index) => (
                        <tr key={index} className="border-t border-gray-300">
                            <td className="px-4 py-3">{f}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeatureTable;
