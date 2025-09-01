import { FeatureContent } from "../../utils/constants";
import FeatureTable from "../FeatureTable";

const FeatureSection = () => {
    return (
        <section className="mx-auto mt-12 max-w-7xl p-4">
            <h3 className="mb-5 text-xl font-bold text-gray-900">
                Why Choose Mindery Kids Over Others?
            </h3>

            <div className="flex">
                {FeatureContent.map((table, index) => (
                    <div key={index}>
                        <FeatureTable
                            title={table.title}
                            features={table.features}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureSection;
