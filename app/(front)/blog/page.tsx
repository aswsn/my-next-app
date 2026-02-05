export default async function BlogPage() {

    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // throw new Error("ไม่สามารถโหลดบทความได้")

    return (
    <div className="p-8">
        <h1 className="text-3xl font-bold text-pink-300">บทความ</h1>
        <p className="mt-4">
            ยินดีต้อนรับสู่หน้า Blog
        </p>
    </div>
    )
}
