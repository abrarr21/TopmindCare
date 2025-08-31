import Button from "./Button";
import SmallCards from "./SmallCards";

const Benefits = [
    { emoji: "🧠", label: "Improve", highlight: "Focus" },
    { emoji: "😊", label: "Reduces", highlight: "Stress" },
    { emoji: "💤", label: "Better", highlight: "Sleep" },
    { emoji: "❤️", label: "Builds", highlight: "Empathy" },
];

const HeroSection = () => {
    return (
        <section className="w-full pt-18">
            <div className="mx-auto mt-16 flex h-screen max-w-7xl">
                <div className="mt-5 h-[70%] w-[50%] p-4">
                    <span className="rounded-full border bg-purple-200 px-2 py-2 font-semibold text-purple-600">
                        🌈Calm Minds, Happy Hearts
                    </span>
                    <h1 className="mt-3 text-5xl leading-14 font-bold">
                        Mindfullness & Meditation for Kids (4 - 14)
                    </h1>
                    <div className="mt-4 mb-4 font-semibold text-gray-500">
                        <p>
                            Fun story-based meditation that build focus,
                            kindness and confidence.
                        </p>
                        <p>
                            Safe, ad-free and crafted with child-development
                            experts.
                        </p>
                    </div>
                    <div className="mt-5 mb-6 flex gap-4">
                        <Button
                            variant="primary"
                            className="py-3 shadow-md shadow-black/20 transition hover:shadow-lg"
                        >
                            Start Free Trial
                        </Button>
                        <Button
                            variant="secondary"
                            className="py-3 shadow-md shadow-black/20 transition hover:shadow-lg"
                        >
                            Explore Program
                        </Button>
                    </div>

                    <SmallCards items={Benefits} />
                </div>
                <div className="h-[70%] w-[50%] rounded-xl bg-gray-200"></div>
                <div className="absolute top-[53%] right-[32%] p-6">
                    <div className="max-w-sm -rotate-3 transform rounded-2xl bg-white p-5 shadow-md ring-1 ring-gray-100">
                        <h3 className="font-bold text-gray-900">
                            Today's Journey
                        </h3>
                        <ul className="mt-3 ml-7 list-inside list-disc space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                                <span>🐉</span>
                                <span>
                                    Dragon Breath{" "}
                                    <span className="text-gray-500">
                                        (3 min)
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>🦋</span>
                                <span>
                                    Butterfly Body Scan{" "}
                                    <span className="text-gray-500">
                                        (5 min)
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>🌙</span>
                                <span>
                                    Sleep Story: Star Boat{" "}
                                    <span className="text-gray-500">
                                        (7 min)
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
