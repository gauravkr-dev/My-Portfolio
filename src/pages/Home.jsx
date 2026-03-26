
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { WhiteBackground } from "../components/ui/white-background"
import { cn } from "@/lib/utils"
import { HeroButtonSection } from "../components/navbar-section"

export const Home = () => {

    return (

        <div className={cn("min-h-screen text-foreground overflow-x-hidden md:px-12 px-4 bg-white")}>
            <WhiteBackground />
            <HeroButtonSection />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
        </div>


    )
}   