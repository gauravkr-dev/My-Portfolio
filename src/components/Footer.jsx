
export const Footer = () => {
    return (
        <footer className="py-12 relative border-t border-border mt-12 pt-8 flex justify-center items-center gap-2">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Gaurav Kumar. All rights reserved.</p>
        </footer>
    )
}