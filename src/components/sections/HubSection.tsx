import HubCards from "../HubCards";

const Buttons = [
    "📥 Download Starter Kit (PDF)",
    "🗓 7-Day Calm Plan",
    "🏤 Classroom Pack",
];

const HubSection = () => {
    return (
        <section className="mx-auto mt-6 h-60 max-w-7xl rounded-xl p-4">
            <HubCards
                title="Parent & Teacher Hub"
                description="Practical guides, printable routines, and progress insights so you can support mindfulness at home and school."
                buttons={Buttons}
            />
        </section>
    );
};

export default HubSection;
