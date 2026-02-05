"use client"

import {useState, useEffect} from "react"

export default function CouterPage() {

    const [count, setCount] = useState(0) // 0 คือค่าเริ่มต้นของ count

    // Auto counter up every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1)
        }, 1000) // 1000 ms = 1 second
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <h1 className="text-3xl font-bold">Counter Page</h1>
            <button onClick={() => setCount(count + 1)} className="bg-pink-200 hover:bg-pink-300 text-black font-bold py-2 px-4 rounded cursor-pointer">
                Counter Up
            </button>
            <h2 className="text-3xl font-bold">{count}</h2>
            <button onClick={() => setCount(count - 1)} className="bg-pink-200 hover:bg-pink-300 text-black font-bold py-2 px-4 rounded cursor-pointer">
                Counter Down
            </button>
        </>
    )
}