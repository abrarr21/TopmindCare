import { faqData } from "../../utils/constants";
import FAQaccordion from "../FAQaccordion";

const FAQSection = () => {
    return (
        <section className="mx-auto mt-6 h-92 max-w-7xl p-4">
            <div className="">
                <h2 className="text-4xl font-semibold">
                    Frequenty Asked Questions
                </h2>
                <FAQaccordion items={faqData} />
            </div>
        </section>
    );
};

export default FAQSection;
