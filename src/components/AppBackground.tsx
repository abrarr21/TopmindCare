type AppBgProps = {
    children: React.ReactNode;
};
const AppBackground = ({ children }: AppBgProps) => {
    return (
        <div className="relative min-h-screen w-full bg-white">
            {/* Purple Glow Left */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "#ffffff",
                    backgroundImage: `
                            radial-gradient(
                            circle at top left,
                            rgba(173, 109, 244, 0.5),
                            transparent 70%
                            )
                            `,
                    filter: "blur(80px)",
                    backgroundRepeat: "no-repeat",
                }}
            />
            {/* Your Content/Components */}
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default AppBackground;
