import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ()=>{
    const [isDarkMode, setIsDarkMode] = useState(()=>{
        try {
            return typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
        // eslint-disable-next-line no-unused-vars
        } catch (e) {
            return false;
        }
    });

    useEffect(()=>{
        try {
            const storedTheme = localStorage.getItem("theme");
            if (storedTheme) {
                if(storedTheme === "dark"){
                    // eslint-disable-next-line react-hooks/set-state-in-effect
                    setIsDarkMode(true);
                    document.documentElement.classList.add("dark");
                } else {
                    setIsDarkMode(false);
                    document.documentElement.classList.remove("dark");
                }
            } else {
                const docDark = document.documentElement.classList.contains('dark');
                setIsDarkMode(docDark);
                if (docDark) localStorage.setItem('theme','dark');
            }
        // eslint-disable-next-line no-unused-vars
        } catch (e) {
            // ignore
        }
    }, []);
    const toggleTheme = ()=>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setIsDarkMode(false);
        } else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(true);
        }
    }
    return (
        <button onClick={toggleTheme} className={cn("p-2 rounded-full duration-300 z-50",
            "focus:outline-hidden"
        )}>
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900" />}
        </button>
    )
}