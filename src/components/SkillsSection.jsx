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
            <div className="container mx-auto w-full">
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
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
                    {skills
                        .filter(skill => activeCategory === "All" || skill.category === activeCategory)
                        .map((skill, key) => (
                            <div key={key} className="p-2">
                                <div className="relative group bg-transparent w-40 h-30 rounded-2xl flex items-center justify-center border border-primary/50 hover:bg-primary/10 transition-colors mx-auto duration-300">

                                    {/* Badge */}
                                    <span className="absolute top-1 right-3 text-[10px] px-1.5 py-1 rounded-sm tracking-wide bg-primary/10 text-primary/30 border border-primary/30">
                                        {skill.category.toUpperCase()}
                                    </span>

                                    {/* Content */}
                                    <div className="flex flex-col items-center gap-2 mt-2">
                                        <img
                                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug}/${skill.slug}-original.svg`}
                                            alt={skill.name}
                                            className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <p className="text-sm font-medium">{skill.name}</p>
                                    </div>
                                </div>


                            </div>


                        ))}
                </div>
            </div>
        </section>
    )
}