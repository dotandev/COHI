"use client"

import { useEffect, useRef } from "react"

export default function CurvedAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resize)
    resize()

    let frame = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw multiple curved lines
      for (let i = 0; i < 50; i++) {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height * 0.3 + i * 8)

        // Create the curve
        const curve = Math.sin(frame * 0.02 + i * 0.1) * 50
        ctx.bezierCurveTo(
          canvas.width * 0.3,
          canvas.height * 0.3 + curve + i * 8,
          canvas.width * 0.6,
          canvas.height * 0.3 - curve + i * 8,
          canvas.width,
          canvas.height * 0.3 + i * 8,
        )

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.1)")
        gradient.addColorStop(0.9, "green") 
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.1)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.stroke()
      }

      frame++
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
}

