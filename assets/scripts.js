// ==================== Imports ====================
import 'htmx.org'
import Alpine from 'alpinejs'

// Add Alpine instance to window object.
window.Alpine = Alpine

// ==================== Terminal ====================
window.terminal = function () {
  return {
    input: '',
    history: [],
    hIndex: -1,
    commands: [
      'help',
      'whoami',
      'thinkstack',
      'experience',
      'projects',
      'skills',
      'fortune',
      'man kabiru',
      'contact',
      'ls',
      'clear',
      'exit',
      'sudo make me a sandwich',
    ],

    init() {
      // htmx fires DOM events (camelCase) — listen directly so `this`
      // stays bound to this Alpine component. (hx-on would bind `this`
      // to the form element instead.)
      this.$refs.form.addEventListener('htmx:configRequest', (evt) =>
        this.beforeRequest(evt),
      )
      this.$refs.form.addEventListener('htmx:afterRequest', () =>
        this.afterRequest(),
      )
      if (window.matchMedia('(pointer: fine)').matches) {
        this.$refs.input.focus()
      }
    },

    // Focus the input when clicking anywhere in the shell,
    // unless the visitor is selecting text or clicking a link/button.
    maybeFocus(event) {
      if (!this.$refs.input) return
      if (window.getSelection().toString()) return
      if (event.target.closest('a, button')) return
      this.$refs.input.focus()
    },

    // Runs before htmx sends the request. Returning nothing lets it
    // proceed; preventing the event handles the command locally.
    beforeRequest(event) {
      const cmd = this.input.trim()

      if (!cmd) {
        event.preventDefault()
        return
      }

      this.history.push(cmd)
      this.hIndex = this.history.length

      if (cmd === 'clear' || cmd === 'cls') {
        event.preventDefault()
        this.input = ''
        this.$refs.scrollback.innerHTML = ''
        return
      }
    },

    afterRequest() {
      this.input = ''
      this.$nextTick(() => {
        this.scrollToBottom()
        this.$refs.input.focus({ preventScroll: true })
      })
    },

    scrollToBottom() {
      const sb = this.$refs.scrollback
      if (sb) sb.scrollTo({ top: sb.scrollHeight, behavior: 'instant' })
    },

    runCommand(cmd) {
      this.input = cmd
      this.$nextTick(() => this.$refs.form.requestSubmit())
    },

    onKeydown(event) {
      switch (event.key) {
        case 'ArrowUp': {
          event.preventDefault()
          if (this.hIndex > 0) {
            this.hIndex -= 1
            this.input = this.history[this.hIndex]
          }
          break
        }
        case 'ArrowDown': {
          event.preventDefault()
          if (this.hIndex < this.history.length - 1) {
            this.hIndex += 1
            this.input = this.history[this.hIndex]
          } else {
            this.hIndex = this.history.length
            this.input = ''
          }
          break
        }
        case 'Tab': {
          event.preventDefault()
          const partial = this.input.trim().toLowerCase()
          if (!partial) return
          const match = this.commands.find(
            (c) => c.startsWith(partial) && c !== partial,
          )
          if (match) this.input = match
          break
        }
        case 'c':
        case 'C': {
          if (!event.ctrlKey) return
          event.preventDefault()
          this.appendLocal('^C')
          this.input = ''
          break
        }
        case 'l':
        case 'L': {
          if (!event.ctrlKey) return
          event.preventDefault()
          this.$refs.scrollback.innerHTML = ''
          this.input = ''
          break
        }
      }
    },

    // Append a locally-rendered block (no server round-trip).
    appendLocal(text) {
      const block = document.createElement('div')
      block.className = 'term-block'
      const echo = document.createElement('div')
      echo.className = 'term-echo'
      echo.textContent = text
      block.appendChild(echo)
      this.$refs.scrollback.appendChild(block)
      this.scrollToBottom()
    },
  }
}

// ==================== Paige letters (sealed envelopes) ====================
window.letters = function () {
  return {
    open: null,
    toggle(id) {
      this.open = this.open === id ? null : id
      if (this.open) {
        // Let hidden things (the scratch card) know they're now visible.
        window.dispatchEvent(
          new CustomEvent('letter:open', { detail: this.open }),
        )
        this.$nextTick(() => {
          const el = document.getElementById('letter-' + this.open)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
    },
    isOpen(id) {
      return this.open === id
    },
  }
}

// ==================== Communication channels (keyboard) ====================
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
    case 's':
      window.open('https://wordsbykabiru.substack.com/', '_blank')
      break
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
    "Your smile has this way of settling the room. It's the first thing I look for when the world feels heavy.",
    "You don't just grow—you bloom with intention. Every year, you become more yourself, and it's beautiful to witness.",
    "In a world of noise, you're the quiet certainty I return to. Thank you for being home in human form.",
    'You carry your softness like armor—not to keep people out, but to protect the beautiful thing you are. That strength humbles me.',
    'Whatever chapters come next, I want to be in the margins, cheering you on. Your story is my favorite one to watch unfold.',
    "The kindness you give doesn't end with you—it travels, touching people you'll never meet. You're changing the world in invisible ways.",
    'If souls were constellations, yours would be the one everyone navigates by. Bright, constant, and impossible to forget.',
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

  // The card lives inside a sealed envelope: it has no dimensions until
  // letter 004 is opened, so initialize on first open instead of on load.
  window.addEventListener('letter:open', (event) => {
    if (event.detail === '004') requestAnimationFrame(resetCard)
  })

  if (card.offsetParent !== null) resetCard()
})

// ==================== Start Alpine ====================
Alpine.start()
