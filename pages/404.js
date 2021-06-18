import Link from "next/link"
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const notFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Opps</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>homepage</a></Link></p>
        </div>
    );
}

export default notFound;