"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { ExternalLink, Github } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { cn } from "../lib/utils";
export function ProjectZeroOne() {
    const isMobile = useIsMobile();
    const images = [
        "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
        "https://assets.aceternity.com/animated-modal.png",
        "https://assets.aceternity.com/animated-testimonials.webp",
        "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
        "/projects/project01/LeftTopCornerLeft.png",
        "/projects/project01/LeftCenter.png",
        "/projects/project01/LeftCenterDown.png",
        "/projects/project01/LeftCenterTop.png",
        "https://assets.aceternity.com/hero-highlight.png",
        "https://assets.aceternity.com/carousel.webp",
        "https://assets.aceternity.com/placeholders-and-vanish-input.png",
        "/projects/project01/TopTop.png",
        "/projects/project01/TopCenter.png",
        "/projects/project01/BottomCenter.png",
        "/projects/project01/Center.png",
        "/projects/project01/CenterDown.png",
        "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
        "https://assets.aceternity.com/tabs.png",
        "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
        "/projects/project01/LeftCenterTop.png",
        "/projects/project01/LeftCenter.png",
        "/projects/project01/Right2.png",
        "/projects/project01/Right2.png",
        "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
        "https://assets.aceternity.com/macbook-scroll.png",
        "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
        "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
        "https://assets.aceternity.com/multi-step-loader.png",
        "https://assets.aceternity.com/vortex.png",
        "https://assets.aceternity.com/wobble-card.png",
        "https://assets.aceternity.com/world-map.webp",
    ];
    const Tags = ["TypeScript", "NextJs", "Tailwind CSS", "Shadcn UI", "Drizzle ORM", "Neon", "UploadThing", "Vercel", "Better Auth", "tRPC", "Socket.io", "Gemini AI"];
    return (
        <div className="flex flex-col md:flex-row w-full gap-18 my-10 bg-transparent py-2 overflow-hidden">
            <div className={cn(`${isMobile ? "h-[400px]" : "h-[500px]"} border border-primary w-full md:w-2/3 rounded-lg overflow-hidden`)}>
                <ThreeDMarquee images={images} />
            </div>

            <div className="w-full md:w-1/3 flex flex-col justify-start items-center px-6 border border-primary rounded-lg">
                <h3 className="text-2xl text-primary text-center font-bold mb-4 mt-2 font-serif">
                    GroundUp Pulse
                </h3>

                <p className="text-justify text-muted-foreground text-sm">
                    GroundUp Pulse is a <span className="text-primary font-bold">smart civic platform</span> that enables citizens to
                    <span className="text-primary font-bold"> report issues</span>, track progress, and help build
                    <span className="text-primary font-bold"> better communities</span> with
                    <span className="text-primary font-bold"> AI-powered validation</span>.
                </p>

                <p className="text-justify text-muted-foreground text-sm mt-2">
                    <span className="font-bold text-primary">GroundUp Pulse</span> —
                    Empowering Citizens. Driving Change.
                </p>
                <div className="flex flex-wrap gap-2 mt-8 justify-center">
                    {Tags.map((tag, index) => (
                        <span key={index} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/40">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-12 flex flex-col gap-4">
                    <a href="https://groundup-pulse.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-background px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-1">
                        Visit Website <ExternalLink className="inline-block ml-2 h-4 w-4" />
                    </a>
                    <a href="https://github.com/gauravkr-dev/GroundUp-Pulse" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-background px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-2">
                        GitHub Repo <Github className="inline-block ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
