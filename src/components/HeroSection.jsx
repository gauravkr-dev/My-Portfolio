import { ArrowDown, ArrowRightIcon } from "lucide-react"
import { OpenToWork } from "./open-to-work"
export const HeroSection = () => {
    return (
        <section id='hero' className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <OpenToWork />
            <div className="grid grid-cols-1 gap-4 items-center w-full mx-auto">
                <div className="grid grid-cols-1 gap-4 justify-items-center mb-6">
                    <img src="/MyPhoto.png" alt="About Me" className="rounded-full h-[180px]" />
                </div>
                <div className="container max-w-4xl mx-auto text-center z-10">
                    <div className="space-y-4 flex flex-col items-center">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Gaurav</span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Kumar</span>
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                            A full-stack web developer who builds fast, scalable, and meaningful digital products — with clean code, clear thinking, and real-world impact.
                        </p>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-row gap-8">
                            {/* <button className="group bg-primary text-white px-5 py-2.5 rounded-lg">
                                Resume
                                <ArrowRightIcon className="group-hover:translate-x-0.5 transition ml-1 size-5 inline-flex" />
                            </button> */}
                            <a
                                href="/gaurav_resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center bg-primary text-white px-5 py-2.5 rounded-lg"
                            >
                                View Resume
                                <ArrowRightIcon className="group-hover:translate-x-0.5 transition ml-1 size-5 inline-flex" />
                            </a>
                            <a href="#projects" className="group rounded-lg gap-2 border border-primary px-5 py-2.5">My Work <ArrowRightIcon className="group-hover:translate-x-0.5 transition ml-1 size-5 inline-flex" /></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}