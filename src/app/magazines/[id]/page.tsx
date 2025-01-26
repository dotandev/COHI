'use client'


import { useParams } from "next/navigation"
import MagazineStory from "../components/story"
import { magazines } from "../components/data"

export default function MagazinePage() {

    const params = useParams()
    const id = params.id as string
    const magazine = magazines.find((magazine) => magazine.id === id)

    if (!magazine) {
        return <div>Institution not found</div>
    }
    return (
        <main className="min-h-screen bg-black mt-10 text-white">
            <MagazineStory magazine={magazine} />
        </main>
    )
}

