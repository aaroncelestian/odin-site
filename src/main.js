const TAGLINES = [
  'Where writing takes shape.',
  'One place for the work that matters.',
  'From notes to manuscript.',
  'Gather your threads. Write what holds.',
  'What you are building lives here.',
]

const LAST_TAGLINE_KEY = 'odin.welcome.lastTagline'

function pickTagline() {
  const previous = localStorage.getItem(LAST_TAGLINE_KEY) ?? ''
  const choices = TAGLINES.filter((line) => line !== previous)
  const pool = choices.length ? choices : TAGLINES
  const next = pool[Math.floor(Math.random() * pool.length)]
  localStorage.setItem(LAST_TAGLINE_KEY, next)
  return next
}

function initHero() {
  const hero = document.querySelector('.hero')
  const tagline = document.querySelector('[data-tagline]')
  if (tagline) {
    tagline.textContent = pickTagline()
  }

  requestAnimationFrame(() => {
    hero?.classList.add('is-ready')
  })
}

function initReveals() {
  const nodes = document.querySelectorAll('.reveal')
  if (!nodes.length) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    nodes.forEach((node) => node.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
  )

  nodes.forEach((node) => observer.observe(node))
}

function initYear() {
  const year = document.querySelector('[data-year]')
  if (year) {
    year.textContent = String(new Date().getFullYear())
  }
}

initHero()
initReveals()
initYear()
