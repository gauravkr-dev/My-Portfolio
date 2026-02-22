"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Github, Linkedin } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { cn } from "../lib/utils";

export function ProjectFour() {
  const isMobile = useIsMobile();
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "/projects/project4/Left.jpg",
    "/projects/project4/Left.jpg",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "/projects/project4/Right.jpg",
    "/projects/project4/BottomCenter.png",
    "/projects/project4/Center.jpg",
    "/projects/project4/Left.jpg",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "/projects/project4/Left.jpg",
    "/projects/project4/Right.jpg",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];
  const Tags = ["TypeScript", "JavaScript", "NextJs", "ReactJs", "NodeJs", "Tailwind CSS", "ExpressJs", "MongoDB", "HTML/CSS", "SQL", "Git/GitHub", "VS Code", "Docker"];
  return (
    <div className="flex flex-col md:flex-row w-full gap-18 my-10 bg-transparent py-2 overflow-hidden">
      <div className={cn(`${isMobile ? "h-[400px]" : "h-[500px]"} border border-primary w-full md:w-2/3 object-cover rounded-lg overflow-hidden`)}>
        <ThreeDMarquee images={images} />
      </div>
      <div className="w-full md:w-1/3 flex flex-col justify-start items-center px-6 border border-primary rounded-lg">
        <h3 className="text-2xl text-primary text-center font-bold mb-4 mt-2 font-serif">Open Source Contributions</h3>
        <p className="text-justify text-muted-foreground text-sm ">As a open source contributor, I actively engage in collaborative projects, enhancing software quality and functionality through <span className="text-primary font-bold">code contributions</span>, <span className="text-primary font-bold">bug fixes</span>, and <span className="text-primary font-bold">feature implementations</span>.</p>
        <div className="flex flex-wrap gap-2 mt-8 justify-center">
          {Tags.map((tag, index) => (
            <span key={index} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/40">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4">
          <a href="https://www.linkedin.com/in/gaurav474" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-background px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-1">
            LinkedIn <Linkedin className="inline-block ml-2 h-4 w-4" />
          </a>
          <a href="https://github.com/gauravkr-dev/Portfolio" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-background px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-2">
            GitHub <Github className="inline-block ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
