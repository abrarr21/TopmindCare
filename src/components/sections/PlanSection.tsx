import { PlanCardsData } from "../../utils/constants";
import PlanCards from "../PlanCards";

const PlanSection = () => {
    return (
        <section className="mx-auto h-[34rem] max-w-7xl p-4">
            <div className="h-full rounded-xl bg-purple-100/70 pl-5">
                <div className="pt-12 text-center">
                    <h3 className="text-xl font-bold text-gray-900">
                        Choose Your Plan
                    </h3>
                    <p className="mt-6 mb-6">
                        Start free, cancel anytime. No hidden charges.
                    </p>
                    <div className="flex gap-6">
                        {PlanCardsData.map((plan, index) => (
                            <div key={index}>
                                <PlanCards
                                    title={plan.title}
                                    description={plan.description}
                                    price={plan.price}
                                    points={plan.points}
                                    btnText={plan.btnText}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlanSection;
