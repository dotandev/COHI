"use client"

import { useEffect, useRef } from "react"

export default function WaveBackground() {
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

    let time = 0
    const lines = 50
    const step = canvas.height / lines

    const animate = () => {
      ctx.fillStyle = "#0f4c2e"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < lines; i++) {
        ctx.beginPath()
        ctx.moveTo(0, step * i)

        for (let x = 0; x < canvas.width; x += 1) {
          const y = Math.sin(x * 0.003 + i * 0.2 + time) * 20 + step * i
          ctx.lineTo(x, y)
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + (i / lines) * 0.1})`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      time += 0.01
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

