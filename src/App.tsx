import BuildSection from "./components/sections/BuildSection";
import FamilyReviewSection from "./components/sections/FamilyReviewSection";
import FAQSection from "./components/sections/FAQSection";
import FeatureSection from "./components/sections/FeatureSection";
import HeroSection from "./components/sections/HeroSection";
import HubSection from "./components/sections/HubSection";
import Navbar from "./components/sections/Navbar";
import PlanSection from "./components/sections/PlanSection";
import ProgramSection from "./components/sections/ProgramSection";
import StartDownloadSection from "./components/sections/StartDownloadSection";
import WhyMinderySection from "./components/sections/WhyMinderySection";
import FooterSection from "./components/sections/FooterSection";

function App() {
    return (
        <>
            <div className="bg-neutral-50">
                <Navbar />
                <HeroSection />
                <WhyMinderySection />
                <ProgramSection />
                <BuildSection />
                <FeatureSection />
                <PlanSection />
                <HubSection />
                <FamilyReviewSection />
                <FAQSection />
                <StartDownloadSection />
                <FooterSection />
            </div>
        </>
    );
}

export default App;
