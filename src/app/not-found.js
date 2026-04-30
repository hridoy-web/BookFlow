import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
            <div className="text-center max-w-md">
                <h1 className="text-6xl md:text-8xl font-bold text-gray-800 dark:text-white">
                    404
                </h1>

                <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                    Page not found
                </p>

                <p className="mt-2 text-sm md:text-xl text-gray-500">
                    Sorry, the page you’re looking for doesn’t exist.
                </p>

                <div className="mt-6">
                    <Link
                        href="/"
                        className="inline-block px-5 py-2.5 rounded-xl bg-black text-white text-sm font-medium hover:opacity-90 transition"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;