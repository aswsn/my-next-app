import Link from "next/link"

export default function Navbar() {
    return (
        <header className="flex space-x-4 mt-2 bg-pink-400 text-black p-4">
            <h1 className="text-3xl font-bold"><Link href="/">My App</Link></h1>
            <ul className="flex space-x-4 mt-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/counter">Counter</Link></li>
                <li><Link href="/login">Login</Link></li>
            </ul>
        </header>
    )
}
