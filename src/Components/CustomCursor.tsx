import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run on non-touch devices with fine pointer (mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return

    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = -100
    let mouseY = -100
    let cursorX = -100
    let cursorY = -100
    let rafId = 0
    let isVisible = false

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (!isVisible) {
        isVisible = true
        cursorX = mouseX
        cursorY = mouseY
        cursor.style.opacity = '1'
      }
    }

    const onMouseLeave = () => {
      isVisible = false
      cursor.style.opacity = '0'
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.2
      cursorY += (mouseY - cursorY) * 0.2

      const target = document.elementFromPoint(mouseX, mouseY) as HTMLElement | null
      const isInteractive = Boolean(
        target?.closest('a, button, input, textarea, select, [role="button"]')
      )
      const scale = isInteractive ? 1.8 : 1

      if (isInteractive) {
        cursor.style.backgroundColor = 'rgba(255, 43, 43, 0.4)'
        cursor.style.borderColor = '#FF2B2B'
      } else {
        cursor.style.backgroundColor = '#FF2B2B'
        cursor.style.borderColor = 'transparent'
      }

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(${scale})`
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      id="ci-cursor"
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-4 w-4 rounded-full border border-transparent bg-[#FF2B2B] opacity-0 shadow-[0_0_10px_rgba(255,43,43,0.35)] transition-[opacity,background-color,border-color] duration-200 ease-out"
    />
  )
}

export default CustomCursor
