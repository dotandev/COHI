"use client"

import { useParams } from "next/navigation"
import InstitutionProfile from "./components/profile"
import { institutions } from "../components/data"

export default function InstitutionPage() {
  const params = useParams()
  const id = params.id as string
  const institution = institutions.find((inst) => inst.id === id)

  if (!institution) {
    return <div>Institution not found</div>
  }

  return (
    <main className="min-h-screen mt-10">
      <InstitutionProfile institution={institution} />
    </main>
  )
}

