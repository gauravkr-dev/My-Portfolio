/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { WhiteBackground } from "../components/ui/white-background"
import { BlackBackground } from "../components/ui/black-background"
import { cn } from "@/lib/utils"
// import { useIsMobile } from "../hooks/use-mobile";
export const Home = () => {
    // const isMobile = useIsMobile();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const getIsDark = () => {
            const storedTheme = localStorage.getItem("theme");
            if (storedTheme) return storedTheme === "dark";
            return document.documentElement.classList.contains("dark");
        };

        // set initial value
        setIsDarkMode(getIsDark());

        // Observe class changes on <html> so toggles elsewhere update this state
        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        // Listen for storage events (other tabs) to keep theme in sync
        const onStorage = (e) => {
            if (e.key === "theme") setIsDarkMode(e.newValue === "dark");
        };
        window.addEventListener("storage", onStorage);

        return () => {
            observer.disconnect();
            window.removeEventListener("storage", onStorage);
        };
    }, []);

    return (

        <div className={cn("min-h-screen text-foreground overflow-x-hidden", !isDarkMode && "bg-white")}>
            {isDarkMode ? <BlackBackground /> : <WhiteBackground />}

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


        </div>


    )
}   