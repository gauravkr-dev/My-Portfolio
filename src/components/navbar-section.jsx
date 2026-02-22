"use client"
import { Github, HomeIcon, Instagram, Linkedin, MailIcon, } from "lucide-react"

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
import { ThemeToggle } from "./ThemeToggle"

const DATA = {
    navbar: [
        { href: "#hero", icon: HomeIcon, label: "Home" },
    ],
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
            email: {
                name: "Send Email",
                url: "mailto:gauravkumar803109@gmail.com",
                icon: MailIcon,
            },
        },
    },
}

export function HeroButtonSection() {
    return (
        <div className="fixed left-0 right-0 bottom-4 flex items-center justify-center z-50 pointer-events-auto">
            <TooltipProvider>
                <Dock direction="middle">
                    {DATA.navbar.map((item) => (
                        <DockIcon key={item.label}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={item.href}
                                        aria-label={item.label}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-8 rounded-full "
                                        )}
                                    >
                                        <item.icon className="size-5" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent className="mb-2">
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
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
                            <ThemeToggle />
                        </div>

                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </div>
    )
}
