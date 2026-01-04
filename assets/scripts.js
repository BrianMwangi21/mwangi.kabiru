import 'htmx.org'

import Alpine from 'alpinejs'

// Add Alpine instance to window object.
window.Alpine = Alpine

// Define scroll navigation before starting Alpine
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

// Start Alpine.
Alpine.start()

// Initialize dark mode on page load
document.addEventListener('DOMContentLoaded', () => {
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
})
