import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import Button from "../Button";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = ["Why", "Programs", "Features", "For Parents", "FAQ"];
    return (
        <nav
            className={cn(
                "fixed top-0 left-0 z-50 w-full border-b border-gray-500 bg-neutral-100/30 backdrop-blur-md transition-all duration-300",
                scrolled && "shadow-md",
            )}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
                {/* Logo */}
                <div className="text-xl font-extrabold text-black md:text-2xl">
                    Topmind Care
                </div>

                {/* Desktop Links */}
                <div className={cn("hidden items-center gap-6 md:flex")}>
                    {links.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="font-semibold text-violet-700 transition-colors hover:text-violet-500"
                        >
                            {link}
                        </a>
                    ))}
                    <Button variant="primary" className={cn("font-bold")}>
                        Start Free
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Button
                        onClick={() => setOpen(!open)}
                        className="rounded-lg p-2 transition hover:bg-gray-800"
                    >
                        {open ? "Close" : "Open"}
                        opn
                    </Button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="flex flex-col items-center space-y-3 border-t border-gray-800 bg-neutral-100 px-4 py-3 md:hidden">
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
