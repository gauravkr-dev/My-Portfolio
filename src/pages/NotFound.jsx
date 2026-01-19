export const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-sm max-md:px-4 py-20">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                404 Not Found
            </h1>
            <div className="h-px w-80 rounded bg-gradient-to-r from-gray-300 to-gray-700 my-5 md:my-7"></div>
            <p className="md:text-xl text-gray-600 max-w-lg text-center">
                The page you are looking for does not exist or has been moved.
            </p>
            <a href="/" className="group inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 px-7 py-2.5 text-white rounded-full mt-10 font-medium active:scale-95 transition-all">
                <span>Back to Home</span>
                <svg className="ml-1 transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
        </div>
    )
}