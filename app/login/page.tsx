import Link from "next/link"

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-3xl font-bold text-pink-300">Login Page</h1>
            <form className="mt-4 w-full max-w-sm">
                <div className="mb-4">
                    <label className="block text-pink-200 font-bold mb-2" htmlFor="username">  
                        Username
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                    />
                </div>
            </form>
            <div className="mb-4 w-full max-w-sm">
                <label className="block text-pink-200 font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                />
            </div>
            <button
                className="bg-pink-200 hover:bg-pink-300 text-black font-bold py-2 px-4 rounded cursor-pointer"
                type="submit"
            >
                Login
            </button>
            <p className="mt-4">Back to <Link href="/" className="text-pink-200 hover:text-pink-300">Home</Link></p>
        </div>
    )
}
