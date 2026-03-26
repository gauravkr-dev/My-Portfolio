import React from "react";
import { ProjectOne } from "./ProjectOne";
import { ProjectTwo } from "./ProjectTwo";
import { ProjectThree } from "./ProjectThree";
import { ProjectFour } from "./ProjectFour";
import { ProjectZero } from "./ProjectZero";
import { ProjectZeroOne } from "./ProjectZeroOne";
import { ArrowRightIcon } from "lucide-react";

export const ProjectsSection = () => {


    return (
        <section id="projects" className="py-24 relative">
            <div className="w-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center mb-12 text-muted-foreground mx-auto max-w-2xl">A selection of projects showcasing my <span className="text-primary font-bold">skills</span> and <span className="text-primary font-bold">experience</span>.</p>

                {/* First Project: */}
                <div className="flex flex-col gap-12">
                    <ProjectZeroOne />
                    <ProjectZero />
                    <ProjectOne />
                    <ProjectTwo />
                    <ProjectThree />
                    <ProjectFour />
                    <div className="flex justify-center -mt-8">
                        <a href="https://github.com/gauravkr-dev" className="" target="_blank" rel="noopener noreferrer">
                            <button className="group flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:cursor-pointer">
                                View More on GitHub
                                <ArrowRightIcon className="group-hover:translate-x-1 transition-transform ml-1 size-5 inline-flex" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}