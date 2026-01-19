import { ArrowRight } from "lucide-react"
export const OpenToWork = () => {
    return (
        <div className="absolute left-0 right-0 top-4 flex items-center justify-center z-50 pointer-events-auto">
            <a
                href="#contact"
                className="hover:bg-background bg-primary/10 dark:hover:border-t-border group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-sm shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                {/* <span className="text-foreground text-sm">Open to work with you</span> */}
                <div class="relative flex items-center justify-center gap-4">
                    <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span class="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
                    </span>
                    <span class="text-foreground text-sm">Open to work with you</span>
                </div>
                <span className="text-center dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                            <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                            <ArrowRight className="m-auto size-3" />
                        </span>
                    </div>
                </div>
            </a>
        </div>
    )
}