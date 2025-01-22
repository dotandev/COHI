'use client'

import { useParams } from 'next/navigation'
import GalleryDetail from '../components/gallerydetail'

export default function GalleryPage() {
  const params = useParams()
  const galleryId = params.id as string

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden my-10">
      <GalleryDetail galleryId={galleryId} />
    </main>
  )
}

