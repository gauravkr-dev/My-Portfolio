"use client"
import { Github, HomeIcon, Instagram, Linkedin } from "lucide-react"
import { MessagesSquare } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dock, DockIcon } from "@/components/ui/dock"

const DATA = {
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/gauravkr-dev",
                icon: Github,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/gaurav474",
                icon: Linkedin,
            },
            Instagram: {
                name: "Instagram",
                url: "https://www.instagram.com/gauravkr_474",
                icon: Instagram,
            },
        },
    },
}

export function HeroButtonSection() {
    return (
        <div className="fixed left-0 right-0 bottom-4 flex items-center justify-center z-50 pointer-events-auto">
            <TooltipProvider>
                <Dock direction="middle">
                    <DockIcon>
                        <div className="size-12 rounded-full flex items-center justify-center">
                            <a href="#hero" aria-label="Home" className={cn(
                                buttonVariants({ variant: "ghost", size: "icon" }),
                                "size-12 rounded-full"
                            )}>
                                <HomeIcon className="size-5" />
                            </a>
                        </div>

                    </DockIcon>
                    <Separator orientation="vertical" className="h-full" />
                    {Object.entries(DATA.contact.social).map(([name, social]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={social.url}
                                        aria-label={social.name}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full"
                                        )}
                                    >
                                        <social.icon className="size-5" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full" />
                    <DockIcon>
                        <div className="size-12 rounded-full flex items-center justify-center">
                            <a href="#contact" aria-label="Contact" className={cn(
                                buttonVariants({ variant: "ghost", size: "icon" }),
                                "size-12 rounded-full"
                            )}>
                                <MessagesSquare className="size-5" />
                            </a>
                        </div>

                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </div>
    )
}
