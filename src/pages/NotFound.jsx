import { House } from "lucide-react"
export const NotFound = () => {

    return (
        <div className="relative z-10 min-h-[70vh] flex flex-col items-center justify-center text-foreground">
            <h1 className="md:text-8xl text-4xl font-bold text-center mt-20 font-mono">404</h1>
            <p className="text-center mt-4 text-muted-foreground text-xl font-medium">The page you're looking for doesn't exist.</p>
            <a href="/" className="mt-6 inline-flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300">
                <House className="size-4 inline-block mr-2" /> Go Home
            </a>
            {/* // Optional: Add some decorative elements or animations here for a more engaging 404 page */}

            <div className="fixed inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-10 animate-pulse pointer-events-none -z-10"></div>
        </div>
    )
}