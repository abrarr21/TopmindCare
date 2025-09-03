import { cn } from "../../utils/cn";

const FooterSection = () => {
    return (
        <footer
            className={cn(
                "mt-20 w-full border-t border-gray-500/20 bg-neutral-200/20 px-1 py-6",
                "md:mt-1 md:max-w-7xl md:py-3 lg:px-6",
            )}
        >
            <div
                className={cn(
                    "mx-auto flex w-full flex-col items-center justify-between gap-6 px-2",
                    "sm:max-w-7xl",
                    "md:flex-row",
                )}
            >
                {/* Left: Logo / Website Name */}
                <div className="">
                    <div
                        className={cn(
                            "text-md text-center font-bold text-gray-800",
                            "md:text-left md:text-xl",
                            "lg:text-3xl",
                        )}
                    >
                        Topmind Care
                    </div>
                    <p
                        className={cn(
                            "mt-2 text-center text-xs font-semibold text-gray-500",
                            "md:mt-1 md:text-left md:text-xs",
                        )}
                    >
                        Mindfulness for growing minds. &copy; 2025 Mindery Kids.
                    </p>
                </div>

                {/* Middle: Contact Links */}
                <div className={cn("flex flex-col text-gray-600")}>
                    <h6
                        className={cn(
                            "text-center text-xs font-semibold text-gray-900/60",
                            "sm:text-md",
                            "md:text-md md:text-left",
                        )}
                    >
                        Contact
                    </h6>
                    <div className="flex space-x-4">
                        <a
                            href="mailto:hello@mywebsite.com"
                            className={cn(
                                "text-xs font-semibold text-purple-600 hover:text-purple-800",
                                "sm:text-sm",
                            )}
                        >
                            Email
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "text-xs font-semibold text-purple-600 hover:text-purple-800",
                                "sm:text-sm",
                            )}
                        >
                            Instagram
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "text-xs font-semibold text-purple-600 hover:text-purple-800",
                                "sm:text-sm",
                            )}
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Right: Legal Links */}
                <div className={cn("flex flex-col text-gray-600")}>
                    <h6
                        className={cn(
                            "text-center text-xs font-semibold text-gray-900/60",
                            "sm:text-md",
                            "md:text-md md:text-left",
                        )}
                    >
                        Legal
                    </h6>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "text-xs font-semibold text-purple-600 hover:text-purple-700",
                                "sm:text-sm",
                            )}
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "text-xs font-semibold text-purple-600 hover:text-purple-700",
                                "sm:text-sm",
                            )}
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
