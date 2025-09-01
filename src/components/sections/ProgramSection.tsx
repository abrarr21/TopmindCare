import ProgramCard from "../ProgramCards";

const ProgramSection = () => {
    return (
        <section className="mx-auto flex max-w-7xl flex-col gap-6 p-4">
            <div>
                <h3 className="text-4xl font-bold text-gray-900">
                    Programs for Every Age
                </h3>
                <p className="mt-4 mb-2 max-w-xl font-semibold text-gray-500">
                    Pick a track or mix and match. Each programs grows with your
                    child.
                </p>
            </div>
            <ProgramCard
                image="https://i.pinimg.com/736x/c9/31/9d/c9319db31c9c18f9577cbe191b66dd3b.jpg"
                title="Little Explorers (4–6)"
                description="Three to five-minute stories with animal friends that teach belly-breathing, noticing sounds, and gentle stretching."
                tags={["🙎🏼‍♂️ Cozy Corner", "🎼 Calm Music", "🎖 Sticker Badges"]}
            />

            <ProgramCard
                image="https://i.pinimg.com/736x/85/04/80/8504805b1ba2e15fd0717c1d6c2ac1fc.jpg"
                title="Brave Thinkers (7–10)"
                description="Mindset stories, focus timers, and kindness practices that build confidence and classroom readiness."
                tags={[
                    "🕰 Focus Timer",
                    "📝 Gratitude Notes",
                    "🌟 Streak Rewards",
                ]}
                reverse
            />

            <ProgramCard
                image="https://i.pinimg.com/736x/9a/69/01/9a69016a96d74dd39704253757f2914f.jpg"
                title="Calm & Curious (11–14)"
                description="Longer meditations, reframing thoughts, and sleep stories for deeper rest and emotional balance."
                tags={["⏰ Mindset Minis", "🌙 Sleep Stories", "🥅 Goal Cards"]}
            />
        </section>
    );
};

export default ProgramSection;
