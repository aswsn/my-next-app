type Props = {
    params: Promise<{ slug: string[] }>
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params
  return (
    <div>
        <h1 className="text-2xl font-bold">This is Document Page</h1>
        { slug ? <p>Path: {slug.join(' > ')}</p> : <p>Not Found Document</p>} 
        {/* ถ้ามากกว่า 1 เงื่อนไขจะเป็น if-else ปกติ */}
    </div>
  )
}
