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

// ==================== Start Alpine ====================
Alpine.start()
