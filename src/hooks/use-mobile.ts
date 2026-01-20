import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
    const query = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    const getInitial = () => window.matchMedia(query).matches

    const [isMobile, setIsMobile] = React.useState<boolean>(getInitial)

    React.useEffect(() => {
        const mql = window.matchMedia(query)
        const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
            // `matches` is supported on both the event and the MediaQueryList
            // use it rather than window.innerWidth for more stable results.
            setIsMobile((e as any).matches === true)
        }

        // Add listener with backwards compatibility
        if (typeof mql.addEventListener === "function") {
            mql.addEventListener("change", onChange as EventListener)
        } else if (typeof (mql as any).addListener === "function") {
            ; (mql as any).addListener(onChange)
        }

        return () => {
            if (typeof mql.removeEventListener === "function") {
                mql.removeEventListener("change", onChange as EventListener)
            } else if (typeof (mql as any).removeListener === "function") {
                ; (mql as any).removeListener(onChange)
            }
        }
    }, [])

    return isMobile
}
