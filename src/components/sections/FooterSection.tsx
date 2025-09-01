const FooterSection = () => {
    return (
        <footer className="mt-12 w-full border-t border-gray-500/20 bg-neutral-200/50 py-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-7 md:flex-row">
                {/* Left: Logo / Website Name */}
                <div>
                    <div className="text-xl font-bold text-gray-800">
                        Topmind Care
                    </div>
                    <p className="mt-2 text-sm font-semibold text-gray-500">
                        Mindfulness for growing minds. &copy; 2025 Mindery Kids.
                    </p>
                </div>

                {/* Middle: Contact Links */}
                <div className="flex flex-col text-gray-600">
                    <h6 className="text-gray-600">Contact</h6>
                    <div className="flex space-x-4">
                        <a
                            href="mailto:hello@mywebsite.com"
                            className="font-semibold text-purple-600 hover:text-purple-800"
                        >
                            Email
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-purple-600 hover:text-purple-800"
                        >
                            Instagram
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-purple-600 hover:text-purple-800"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Right: Legal Links */}
                <div className="flex flex-col text-gray-600">
                    <h6 className="text-gray-600">Legal</h6>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-purple-600 hover:text-purple-800"
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-purple-600 hover:text-purple-800"
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
