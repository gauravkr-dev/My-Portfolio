
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { BackgroundLines } from "../components/ui/background-lines";
import { useIsMobile } from "../hooks/use-mobile";
export const Home = () => {
    const isMobile = useIsMobile();

    return (

        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {isMobile ?
                <>
                    {/* Navbar */}
                    <Navbar />
                    {/* Main Content */}
                    <main>
                        <HeroSection />
                        <AboutSection />
                        <SkillsSection />
                        <ProjectsSection />
                        <ContactSection />
                    </main>

                    {/* Footer */}
                    <Footer />
                </>
                :

                <BackgroundLines>

                    {/* Navbar */}
                    <Navbar />

                    {/* Main Content */}
                    <main>
                        <HeroSection />
                        <AboutSection />
                        <SkillsSection />
                        <ProjectsSection />
                        <ContactSection />
                    </main>

                    {/* Footer */}
                    <Footer />
                </BackgroundLines>
            }
        </div>


    )
}   