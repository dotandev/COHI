'use client'

import { useParams } from 'next/navigation'

export default function GalleryPage() {
  const params = useParams()
  const projectId = params.id as string

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden my-10">
    </main>
  )
}

