import { useState } from "react"

const skills = [
    // Languages 
    { name: "JavaScript", slug: "javascript", category: "Lang" },
    { name: "TypeScript", slug: "typescript", category: "Lang" },
    { name: "Python", slug: "python", category: "Lang" },
    { name: "C++", slug: "cplusplus", category: "Lang" },
    { name: "C#", slug: "csharp", category: "Lang" },

    // Frontend Skills
    { name: "HTML", slug: "html5", category: "Frontend" },
    { name: "CSS", slug: "css3", category: "Frontend" },
    { name: "React", slug: "react", category: "Frontend" },
    { name: "Next.js", slug: "nextjs", category: "Frontend" },
    { name: "Tailwind CSS", slug: "tailwindcss", category: "Frontend" },

    // Backend Skills
    { name: "Node.js", slug: "nodejs", category: "Backend" },
    { name: "Express.js", slug: "express", category: "Backend" },
    { name: "MongoDB", slug: "mongodb", category: "Backend" },
    { name: "Next.js", slug: "nextjs", category: "Backend" },
    { name: "PostgreSQL", slug: "postgresql", category: "Backend" },
    { name: "Firebase", slug: "firebase", category: "Backend" },
    { name: "Supabase", slug: "supabase", category: "Backend" },

    //Tools
    { name: "GitHub", slug: "github", category: "Tools" },
    { name: "Docker", slug: "docker", category: "Tools" },
    { name: "VS Code", slug: "vscode", category: "Tools" },
    { name: "Git", slug: "git", category: "Tools" },

]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    return (
        <section id="skills" className="py-24 relative bg-transparent">
            <div className="w-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span className="text-primary"> Skills</span></h2>

                <div className="flex flex-row items-center overflow-x-auto justify-start sm:justify-center gap-4 mb-12 no-scrollbar">
                    {["All", "Lang", "Frontend", "Backend", "Tools"].map((category, key) => (
                        <button
                            key={key}
                            className={`py-2 px-4 cursor-pointer rounded-lg font-medium transition-colors duration-300 ${activeCategory === category ? 'bg-primary/80 text-white' : 'bg-transparent rounded-lg border border-primary/40 text-foreground hover:bg-primary/40 hover:text-white'}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center items-center md:gap-4 gap-2">
                    {skills
                        .filter(skill => activeCategory === "All" || skill.category === activeCategory)
                        .map((skill, key) => (
                            <div key={key} className="md:p-2 p-1">
                                <div className="relative bg-transparent rounded-md flex items-center justify-center border border-primary/50 hover:bg-primary/10 transition-colors md:px-4 px-2 py-2 duration-300">

                                    {/* Content */}
                                    <div className="flex flex-row items-center gap-2">
                                        <img
                                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug}/${skill.slug}-original.svg`}
                                            alt={skill.name}
                                            className="md:w-6 md:h-6 w-4 h-4 rounded"
                                        />
                                        <p className="md:text-sm text-xs font-medium">{skill.name}</p>
                                    </div>
                                </div>


                            </div>


                        ))}
                </div>
            </div>
        </section>
    )
}