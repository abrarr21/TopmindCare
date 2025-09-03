import { cn } from "../../utils/cn";
import Button from "../Button";
import SmallCards from "../SmallCards";

const Benefits = [
    { emoji: "🧠", label: "Improve", highlight: "Focus" },
    { emoji: "😊", label: "Reduces", highlight: "Stress" },
    { emoji: "💤", label: "Better", highlight: "Sleep" },
    { emoji: "❤️", label: "Builds", highlight: "Empathy" },
];

const HeroSection = () => {
    return (
        <section className="mx-auto w-full">
            <div
                className={cn(
                    "relative mx-auto mt-28 flex flex-col items-center gap-8 px-2",
                    "sm:px-6",
                    "lg:mt-18 lg:h-[85vh] lg:max-w-7xl lg:flex-row lg:items-center lg:gap-12",
                )}
            >
                {/* Left Content */}
                <div
                    className={cn(
                        "flex w-full flex-col space-y-2",
                        "lg:w-1/2 lg:space-y-3",
                    )}
                >
                    <span
                        className={cn(
                            "self-center rounded-full border bg-purple-200 px-3 py-1.5 text-sm font-bold text-purple-600 shadow-md shadow-purple-200",
                            "sm:text-md",
                            "lg:self-start lg:py-1.5",
                        )}
                    >
                        🌈 Calm Minds, Happy Hearts
                    </span>

                    <h1
                        className={cn(
                            "mt-2 max-w-sm text-center text-3xl leading-snug font-bold",
                            "sm:max-w-lg sm:self-center sm:text-4xl sm:leading-tight",
                            "lg:mt-1 lg:max-w-xl lg:text-left lg:text-5xl lg:leading-[1]",
                        )}
                    >
                        Mindfullness & Meditation for Kids (4 - 14)
                    </h1>

                    <div
                        className={cn(
                            "mt-3 max-w-sm space-y-1 text-center font-medium text-gray-600",
                            "sm:mt-1 sm:max-w-lg sm:self-center sm:text-lg",
                            "lg:mt-2 lg:mb-4 lg:max-w-xl lg:text-left",
                        )}
                    >
                        <p className="leading-tight">
                            Fun story-based meditation that build focus,
                            kindness and confidence.
                        </p>
                        <p className="leading-tight">
                            Safe, ad-free and crafted with child-development
                            experts.
                        </p>
                    </div>

                    <div
                        className={cn(
                            "mx-auto mt-8 mb-5 flex w-[18rem] flex-row justify-center gap-3",
                            "sm:mb-8 sm:w-[24rem] sm:gap-4",
                            "md:mx-auto",
                            "lg:mx-0 lg:mb-6 lg:justify-start",
                        )}
                    >
                        <Button
                            variant="primary"
                            className={cn(
                                "rounded-xl py-3 text-xs text-nowrap shadow-md shadow-black transition hover:shadow-lg",
                                "sm:text-lg",
                            )}
                        >
                            Start Free Trial
                        </Button>
                        <Button
                            variant="secondary"
                            className={cn(
                                "rounded-xl py-3 text-xs text-nowrap shadow-md shadow-black transition hover:shadow-lg",
                                "sm:text-lg",
                            )}
                        >
                            Explore Program
                        </Button>
                    </div>

                    <SmallCards items={Benefits} />
                </div>

                {/* Right Image / Placeholder */}
                <div
                    className={cn(
                        "h-92 w-full rounded-xl bg-gray-200",
                        "sm:h-[28rem]",
                        "lg:h-[80%] lg:w-1/2",
                    )}
                >
                    <img
                        src="https://i.pinimg.com/736x/34/00/13/340013c6e4e5d9553f5347cb5d05ab69.jpg"
                        className="h-full w-full rounded-2xl object-cover shadow-lg"
                    />
                </div>

                {/* Floating Card */}
                <div
                    className={cn(
                        "absolute top-[90%] left-[18%] mx-auto mt-6 w-full max-w-sm",
                        "sm:top-[90%] sm:left-[30%]",
                        "md:top-[90%] md:left-[34%]",
                        "lg:top-[55%] lg:right-[8%] lg:mt-0 lg:p-6",
                    )}
                >
                    <div
                        className={cn(
                            "max-w-[70%] -rotate-1 transform rounded-2xl bg-white/50 px-1.5 py-3 shadow-md ring-1 ring-gray-100 backdrop-blur-md",
                            "lg:max-w-[80%] lg:-rotate-3 lg:px-3 lg:py-4",
                        )}
                        style={{
                            boxShadow: "-6px 6px 15px rgba(0,0,0, 0.15)",
                        }}
                    >
                        <h3 className="font-bold text-gray-900">
                            Today's Journey
                        </h3>
                        <ul
                            className={cn(
                                "mt-1.5 ml-3 list-inside list-disc space-y-1 text-sm text-gray-700",
                            )}
                        >
                            <li className="flex items-start gap-y-2">
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
