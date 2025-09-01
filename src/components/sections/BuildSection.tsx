import { BuildCards } from "../../utils/constants";
import InfoCards from "../InfoCards";

const BuildSection = () => {
    return (
        <section className="mx-auto mt-12 h-[60vh] max-w-7xl p-4">
            <h2 className="mb-10 text-4xl font-bold text-gray-900">
                Build for Kids, Loved by Parents
            </h2>

            <div className="flex flex-wrap gap-5">
                {BuildCards.map((card, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 basis-[calc(33.333%-1.25rem)]"
                    >
                        <InfoCards
                            title={card.title}
                            description={card.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BuildSection;
