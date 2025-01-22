import React from 'react'
import { ArrowRight } from 'lucide-react'


interface DebateEventProps {
  title: string
  editions: string[]
  imageSrc: string
  imageAlt?: string
  registerLink?: string
  highlightColor?: string
  className?: string
  details?: string
}

export const DebateEvent = ({
  title = "UNILAG Debate Rumble",
  editions = ["2023", "2021", "2018", "2018", "2018", "2018", "2018"],
  imageSrc = "/placeholder.svg?height=600&width=800",
  imageAlt = "Debate Event",
  registerLink = "#",
  highlightColor = "#800000",
  className = "",
  details
}: DebateEventProps) => {
  return (
    <div className={`min-h-screen p-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h1
              className="text-3xl md:text-3xl font-bold lg:text-nowrap"
              style={{ color: highlightColor }}
            >
              {title}
            </h1>

            <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg lg:ml-16">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-12 lg:pl-24">
            <div>
              <h2
                className="text-3xl md:text-4xl mb-6"
                style={{ color: highlightColor }}
              >
                Editions
              </h2>

              <div className="space-y-4">
                {editions.map((year, index) => (
                  <p
                    key={`${year}-${index}`}
                    className="text-2xl md:text-3xl transition-colors hover:opacity-80"
                    style={{ color: highlightColor }}
                  >
                    {year}
                  </p>
                ))}
              </div>
            </div>

            <a
              href={registerLink}
              className="group inline-flex items-center gap-2 text-lg px-6 py-3 rounded-full transition-all"
              style={{
                border: `2px solid ${highlightColor}`,
                color: highlightColor
              }}
            >
              Register NOW
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <div className='lg:mx-20'>
          <p className='my-4 font-semibold'>{details}</p>
          <div className="px-4 sm:-px-10 my-8 sm:my-12">
            <hr className="w-full border-primary" />
          </div>
        </div>
      </div>
    </div>
  )
}