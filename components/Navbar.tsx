"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {

    const pathname = usePathname()

    console.log("Current pathname", pathname)

    return (
        <header className="flex space-x-4 mt-2 bg-pink-400 text-yellow-950 p-4">
            <h1 className="text-3xl font-bold"><Link href="/">My App</Link></h1>
            <ul className="flex space-x-4 mt-2">
                <li><Link className={pathname === "/" ? "text-pink-200" : ""} href="/">Home</Link></li>
                <li><Link className={pathname === "/about" ? "text-pink-200" : ""} href="/about">About</Link></li>
                <li><Link className={pathname === "/contact" ? "text-pink-200" : ""} href="/contact">Contact</Link></li>
                <li><Link className={pathname === "/blog" ? "text-pink-200" : ""} href="/blog">Blog</Link></li>
                <li><Link className={pathname === "/counter" ? "text-pink-200" : ""} href="/counter">Counter</Link></li>
                <li><Link className={pathname === "/login" ? "text-pink-200" : ""} href="/login">Login</Link></li>
            </ul>
        </header>
    )
}
