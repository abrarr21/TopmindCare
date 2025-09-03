import { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import { List, X } from "lucide-react";
import Button from "../Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const logoLink = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useGSAP(() => {
        gsap.fromTo(
            logoLink.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        );
    });

    const links = ["Why", "Programs", "Features", "For Parents", "FAQ"];
    return (
        <nav
            className={cn(
                "fixed top-0 left-0 z-50 w-full border-b border-gray-500 bg-neutral-100/30 backdrop-blur-md transition-all duration-300",
                scrolled && "shadow-xl",
            )}
        >
            <div
                className={cn(
                    "mx-auto flex w-full items-center justify-between px-8 py-5",
                    "sm:max-w-7xl md:px-4 md:py-4 lg:px-8",
                )}
                ref={logoLink}
            >
                {/* Logo */}
                <div
                    className={cn(
                        "text-xl font-extrabold text-black",
                        "sm:text-xl sm:text-nowrap md:text-xl lg:text-2xl",
                    )}
                >
                    Topmind Care
                </div>

                {/* Desktop Links */}
                <div
                    className={cn(
                        "hidden items-center text-nowrap md:flex md:gap-3 md:text-lg lg:gap-6",
                    )}
                >
                    {links.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-violet-700 transition-colors hover:text-violet-500 md:font-semibold lg:font-bold"
                        >
                            {link}
                        </a>
                    ))}
                    <Button
                        variant="primary"
                        className={cn(
                            "font-bold shadow-md shadow-neutral-800 hover:shadow-lg",
                        )}
                    >
                        Start Free
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Button
                        onClick={() => setOpen(!open)}
                        className="rounded-full p-2 shadow-md shadow-black transition hover:bg-gray-800 hover:shadow-lg"
                    >
                        {open ? (
                            <p className="text-sm">
                                <X size={20} />
                            </p>
                        ) : (
                            <p className="text-lg">
                                <List size={20} />
                            </p>
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div
                    className={cn(
                        "flex flex-col items-center space-y-3 overflow-hidden border-t border-gray-800 bg-neutral-100 px-4 transition-all duration-500 ease-in-out md:hidden",
                        open
                            ? "translate-y-0 py-3 opacity-100"
                            : "pointer-events-none -translate-y-3 py-0 opacity-0",
                    )}
                >
                    {links.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="items-center font-semibold text-violet-700 transition-colors hover:text-violet-500"
                        >
                            {link}
                        </a>
                    ))}
                    <Button variant="primary">Start Free</Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
