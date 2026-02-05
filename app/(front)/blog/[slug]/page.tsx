type Props = {
    params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params
    // แปลง url ที่เป็นภาษาไทย
    const thaiSlug = decodeURIComponent(slug)

    return (
        <div>
            บทความ: {thaiSlug}
        </div>
    )
}
