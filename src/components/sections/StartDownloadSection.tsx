import Button from "../Button";

const StartDownloadSection = () => {
    return (
        <section className="mx-auto mt-8 h-60 max-w-7xl p-4">
            <div className="rounded-lg bg-gradient-to-br from-purple-100/40 to-blue-100/40 p-4 shadow-md">
                <h2 className="text-4xl font-bold text-gray-900">
                    Start Your Child's Mindfulness Journey
                </h2>
                <p className="mt-4 mb-5 text-gray-700">
                    Try it free. Build Calm, Focus, and Kindness - one small
                    practice a day.
                </p>
                <div className="mt-1 mb-3 flex gap-4">
                    <Button
                        variant="primary"
                        className="rounded-xl py-3 shadow-sm shadow-black/20 hover:shadow-lg"
                    >
                        Create Account
                    </Button>
                    <Button
                        variant="secondary"
                        className="rounded-xl py-3 shadow-sm shadow-black/20 hover:shadow-lg"
                    >
                        Download App
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default StartDownloadSection;
