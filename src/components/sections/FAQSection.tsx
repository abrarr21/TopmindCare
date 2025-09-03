import { cn } from "../../utils/cn";
import { faqData } from "../../utils/constants";
import FAQaccordion from "../FAQaccordion";

const FAQSection = () => {
    return (
        <section className={cn("mx-auto mt-6 h-92 max-w-7xl p-4")}>
            <div className="">
                <h2 className={cn("text-2xl font-semibold", "md:text-4xl")}>
                    Frequenty Asked Questions
                </h2>
                <FAQaccordion items={faqData} />
            </div>
        </section>
    );
};

export default FAQSection;
