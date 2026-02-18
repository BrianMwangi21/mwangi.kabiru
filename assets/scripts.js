// ==================== CRITICAL: Initialize dark mode BEFORE imports ====================
;(function () {
  const html = document.documentElement
  const isDark =
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  if (isDark) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }

  window.__isDarkMode = isDark
})()

// ==================== Imports ====================
import 'htmx.org'
import Alpine from 'alpinejs'

// Add Alpine instance to window object.
window.Alpine = Alpine

// ==================== Scroll navigation ====================
window.scrollNav = function () {
  return {
    updateActive() {
      const sections = [
        'hero',
        'about',
        'experience',
        'projects',
        'skills',
        'quote',
      ]
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((id, index) => {
        const section = document.getElementById(id)
        if (section) {
          const { offsetTop, offsetHeight } = section
          const dots = document.querySelectorAll('.scroll-dot')

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            dots.forEach((dot) => dot.classList.remove('active'))
            if (dots[index]) dots[index].classList.add('active')
          }
        }
      })
    },
    scrollToSection(id) {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },
  }
}

// ==================== Keyboard shortcuts ====================
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

  switch (e.key.toLowerCase()) {
    case 'g':
      window.open('https://github.com/BrianMwangi21', '_blank')
      break
    case 'l':
      window.open('https://www.linkedin.com/in/brian-mwangi/', '_blank')
      break
    case 'e':
      window.location.href =
        'mailto:mwangikabiru21@gmail.com?subject=Hello%20Brian!&body=I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect...'
      break
  }
})

// ==================== Dark mode toggle ====================
document.addEventListener('DOMContentLoaded', () => {
  const darkModeButton = document.querySelector('[title="Toggle dark mode"]')
  if (darkModeButton) {
    darkModeButton.addEventListener('click', () => {
      const html = document.documentElement
      html.classList.toggle('dark')
      localStorage.setItem(
        'theme',
        html.classList.contains('dark') ? 'dark' : 'light'
      )
    })
  }
})

// ==================== Paige scratch card ====================
document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('[data-scratch-card]')
  if (!card) return

  const stage = card.querySelector('[data-scratch-stage]')
  const canvas = card.querySelector('[data-scratch-canvas]')
  const message = card.querySelector('[data-scratch-message]')
  const refreshButton = card.querySelector('[data-scratch-refresh]')

  if (!stage || !canvas || !message || !refreshButton) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const storageKey = 'paigeScratchMessages'
  const messages = [
    'Happy birthday, Paige. The world got a rare kind of magic, and we all got lucky to meet it.',
    'Love, laughter, and success keep trailing you because you move with grace and real fire.',
    'Truth is, I live every day with you in my head, in my wins, and in the quiet hours.',
    'I celebrate you every waking day, not just for what you do, but for who you are when no one is watching.',
    'You are a beautiful human being for real. You make ordinary days feel like a soft victory.',
    "Every step you take, I'm rooting for you. Loud in the big moments and steady in the in-between ones.",
    'Compared to others, they are candlelights to your sun. Warm, bright, and impossible to ignore.',
  ]

  const readStored = () => {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey))
      if (Array.isArray(stored) && stored.length) return stored
    } catch (error) {
      return null
    }
    return null
  }

  let remaining = readStored() || [...messages]
  let isDrawing = false
  let lastPoint = null

  const setMessage = (text) => {
    message.classList.remove('is-visible')
    message.textContent = text
    void message.offsetWidth
    message.classList.add('is-visible')
  }

  const pickMessage = () => {
    if (remaining.length === 0) {
      remaining = [...messages]
    }
    const index = Math.floor(Math.random() * remaining.length)
    const picked = remaining.splice(index, 1)[0]
    localStorage.setItem(storageKey, JSON.stringify(remaining))
    return picked
  }

  const resizeCanvas = () => {
    const rect = stage.getBoundingClientRect()
    const ratio = window.devicePixelRatio || 1
    canvas.width = rect.width * ratio
    canvas.height = rect.height * ratio
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
  }

  const paintCover = () => {
    ctx.globalCompositeOperation = 'source-over'
    ctx.fillStyle = '#d1d5db'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
    for (let i = 0; i < 14; i += 1) {
      const x = (canvas.width / 14) * i
      ctx.fillRect(x, 0, 2, canvas.height)
    }
    ctx.globalCompositeOperation = 'destination-out'
  }

  const getPoint = (event) => {
    const rect = canvas.getBoundingClientRect()
    const clientX = event.touches ? event.touches[0].clientX : event.clientX
    const clientY = event.touches ? event.touches[0].clientY : event.clientY
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    }
  }

  const scratchLine = (from, to) => {
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineWidth = 28
    ctx.beginPath()
    ctx.moveTo(from.x, from.y)
    ctx.lineTo(to.x, to.y)
    ctx.stroke()
  }

  const startScratch = (event) => {
    isDrawing = true
    lastPoint = getPoint(event)
  }

  const moveScratch = (event) => {
    if (!isDrawing || !lastPoint) return
    event.preventDefault()
    const point = getPoint(event)
    scratchLine(lastPoint, point)
    lastPoint = point
  }

  const endScratch = () => {
    isDrawing = false
    lastPoint = null
  }

  const resetCard = () => {
    setMessage(pickMessage())
    resizeCanvas()
    paintCover()
  }

  refreshButton.addEventListener('click', () => {
    resetCard()
  })

  canvas.addEventListener('mousedown', startScratch)
  canvas.addEventListener('mousemove', moveScratch)
  canvas.addEventListener('mouseup', endScratch)
  canvas.addEventListener('mouseleave', endScratch)

  canvas.addEventListener('touchstart', startScratch, { passive: false })
  canvas.addEventListener('touchmove', moveScratch, { passive: false })
  canvas.addEventListener('touchend', endScratch)

  window.addEventListener('resize', () => {
    resizeCanvas()
    paintCover()
  })

  resetCard()
})

// ==================== Start Alpine ====================
Alpine.start()
