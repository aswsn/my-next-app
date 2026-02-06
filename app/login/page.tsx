"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {

    const router = useRouter()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // ฟังก์ชันการจัดการการล็อกอิน
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (username === 'admin' && password === '1234') {
            alert('Login successful!')
            // สั่งไปหน้า counter
            router.push('/counter')
        } else {
            alert('Login failed. Please try again.')
        }
    }

    // router.push('/counter')

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-3xl font-bold text-pink-300">Login Page</h1>
            <form onSubmit={handleLogin} className="mt-4 w-full max-w-sm">
                <div className="mb-4">
                    <label className="block text-pink-200 font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                    />
                </div>

                <div className="mb-4 w-full max-w-sm">
                    <label className="block text-pink-200 font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
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
            </form>
            <p className="mt-4">Back to <Link href="/" className="text-pink-200 hover:text-pink-300">Home</Link></p>
        </div>
    )
}
