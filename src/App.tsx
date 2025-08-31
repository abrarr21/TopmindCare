import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProgramSection from "./components/ProgramSection";
import WhyMinderySection from "./components/WhyMinderySection";

function App() {
    return (
        <>
            <div className="bg-neutral-50">
                <Navbar />
                <HeroSection />
                <WhyMinderySection />
                <ProgramSection />
            </div>
        </>
    );
}

export default App;
