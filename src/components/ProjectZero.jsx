"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { ExternalLink, Github } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { cn } from "../lib/utils";
export function ProjectZero() {
    const isMobile = useIsMobile();
    const images = [
        "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
        "https://assets.aceternity.com/animated-modal.png",
        "https://assets.aceternity.com/animated-testimonials.webp",
        "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
        "/projects/project0/LeftTopCornerLeft.png",
        "/projects/project0/LeftCenter.png",
        "/projects/project0/LeftCenterDown.png",
        "projects/project0/LeftCenterTop.png",
        "https://assets.aceternity.com/hero-highlight.png",
        "https://assets.aceternity.com/carousel.webp",
        "https://assets.aceternity.com/placeholders-and-vanish-input.png",
        "/projects/project0/TopTop.png",
        "/projects/project0/TopCenter.png",
        "/projects/project0/BottomCenter.png",
        "/projects/project0/Center.png",
        "/projects/project0/CenterDown.png",
        "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
        "https://assets.aceternity.com/tabs.png",
        "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
        "projects/project0/LeftCenterTop.png",
        "projects/project0/LeftCenter.png",
        "projects/project0/Right2.png",
        "projects/project0/Right2.png",
        "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
        "https://assets.aceternity.com/macbook-scroll.png",
        "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
        "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
        "https://assets.aceternity.com/multi-step-loader.png",
        "https://assets.aceternity.com/vortex.png",
        "https://assets.aceternity.com/wobble-card.png",
        "https://assets.aceternity.com/world-map.webp",
    ];
    const Tags = ["TypeScript", "NextJs", "Tailwind CSS", "Shadcn UI", "Drizzle ORM", "Neon", "imagekit.io", "Vercel", "Better Auth", "tRPC", "Inngest", "Polar", "Sarvam AI", "Gemini AI"];
    return (
        <div className="flex flex-col md:flex-row w-full gap-18 my-10 bg-transparent py-2 overflow-hidden">
            <div className={cn(`${isMobile ? "h-[400px]" : "h-[500px]"} border border-primary w-full md:w-2/3 object-cover rounded-lg overflow-hidden`)}>
                <ThreeDMarquee images={images} />
            </div>

            <div className="w-full md:w-1/3 flex flex-col justify-start items-center px-6 border border-primary rounded-lg">
                <h3 className="text-2xl text-primary text-center font-bold mb-4 mt-2 font-serif">BeBetter.ai</h3>
                <p className="text-justify text-muted-foreground text-sm ">BeBetter.ai is your <span className="text-primary font-bold">all-in-one AI career companion</span> that helps you <span className="text-primary font-bold">practice interviews</span>, <span className="text-primary font-bold">test your knowledge</span>, <span className="text-primary font-bold">optimize your resume</span>, <span className="text-primary font-bold">explore job opportunities</span>, and grow with <span className="text-primary font-bold">intelligent feedback</span> — turning preparation into real confidence.</p>
                <p className="text-justify text-muted-foreground text-sm mt-2"><span className="font-bold text-primary -ml-5">BeBetter.ai</span> — Intelligent Career Growth Platform</p>
                <div className="flex flex-wrap gap-2 mt-8 justify-center">
                    {Tags.map((tag, index) => (
                        <span key={index} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/40">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-12 flex flex-col gap-4">
                    <a href="https://be-better-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-background px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-1">
                        Visit Website <ExternalLink className="inline-block ml-2 h-4 w-4" />
                    </a>
                    <a href="https://github.com/gauravkr-dev/BeBetter.ai" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-background px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-2">
                        GitHub Repo <Github className="inline-block ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
