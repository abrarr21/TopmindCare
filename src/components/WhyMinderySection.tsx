import InfoCards from "./InfoCards";

const Cards = [
    {
        badge: "Story Meditations",
        title: "Guided Adventures",
        description:
            "Short, age-wise journeys that help kids calm their bodies and name their feelings.",
    },
    {
        badge: "Anytime Calm",
        title: "Tools for Big Feelings",
        description:
            "Quick reset audios for anger, worry, pre-exams jitters, and bedtime battles.",
    },
    {
        badge: "Parent Hub",
        title: "Guilded & Routines",
        description:
            "Weekly tips, printable charts, and simple routines you can use at home or school.",
    },
];

const WhyMinderySection = () => {
    return (
        <section className="mx-auto h-[50vh] max-w-7xl">
            <div className="h-full w-full p-2 pl-5">
                <h2 className="text-4xl font-bold text-gray-900">
                    Why Mindery Kids?
                </h2>
                <p className="mt-4 mb-4 max-w-xl font-semibold text-gray-500">
                    Children learn best through play and stories. Our sessions
                    blend gentle breathing, guided imagery, and music to make
                    mindfulness enjoyable and effective.
                </p>

                <div className="flex gap-2">
                    {Cards.map((card, index) => (
                        <div key={index}>
                            <InfoCards
                                badge={card.badge}
                                title={card.title}
                                description={card.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyMinderySection;
