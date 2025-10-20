import React from 'react'

// Foto en logo – zorg dat ze in /public staan
const HERO_SRC = 'hero.jpg'
const LOGO_SRC = 'logo.svg'

// ---- Navigatiebalk (zwart, wit logo rechts) ----
const Nav = () => (
  <header className="w-full bg-black text-white py-4">
    <div className="container-narrow flex items-center justify-between">
      {/* Links: MYTABLE */}
      <h1 className="font-display text-2xl tracking-widest">MYTABLE</h1>
      {/* Rechts: logo (wit SVG) */}
      <img
        src={LOGO_SRC}
        alt="MYTABLE logo"
        className="h-10 md:h-12 object-contain"
      />
    </div>
  </header>
)

// ---- Hero: foto over hele breedte met tekst erop ----
const Hero = () => (
  <section className="relative bg-black text-white">
    {/* Foto */}
    <img
      src={HERO_SRC}
      alt="MYTABLE hero"
      className="block w-full h-auto"
    />

    {/* Overlay (donkerlaagje voor leesbaarheid) */}
    <div className="absolute inset-0 bg-black/35" />

    {/* Tekst + CTA */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-5">
      <p className="text-lg md:text-xl tracking-wide text-neutral-200">
        Zorgeloos genieten?
      </p>
      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium tracking-wide border border-white text-white hover:bg-white hover:text-black transition"
      >
        Vertel ons je idee
      </a>
    </div>
  </section>
)

const Over = () => (
  <section id="over" className="py-20 border-t border-neutral-800 bg-black text-white">
    <div className="container-narrow grid md:grid-cols-[1fr_2fr] gap-10 items-start">
      <div className="aspect-[3/4] rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500">
        <span className="text-6xl">🍷</span>
      </div>
      <div className="space-y-6">
        <h2 className="font-display text-3xl">Marien Vermeij &amp; Yannick Wilthof</h2>
        <p className="text-neutral-300 leading-relaxed max-w-prose">
          Marien en Yannick werken al vier jaar in diverse restaurants en bundelen nu hun ervaring
          om bij jou thuis een zorgeloze, onvergetelijke avond te bezorgen.
        </p>
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section id="contact" className="py-20 border-t border-neutral-800 bg-black text-white">
    <div className="container-narrow">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="font-display text-3xl">Contact</h2>
          <p className="text-neutral-300">vertel ons je idee.</p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>
              <strong>E-mail:</strong>{' '}
              <a
                className="underline hover:no-underline"
                href="mailto:marienvermeij@gmail.com"
              >
                marienvermeij@gmail.com
              </a>
            </li>
            <li>
              <strong>Telefoon:</strong>{' '}
              <a
                className="underline hover:no-underline"
                href="tel:0653591134"
              >
                06 5359 1134
              </a>
            </li>
            <li><strong>Instagram:</strong> @mytable</li>
          </ul>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label className="block">
            <span className="text-sm">Naam</span>
            <input
              required
              name="naam"
              className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2 placeholder-neutral-500"
            />
          </label>
          <label className="block">
            <span className="text-sm">E-mail</span>
            <input
              required
              type="email"
              name="email"
              className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2 placeholder-neutral-500"
            />
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm">Datum</span>
              <input
                type="date"
                name="datum"
                className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2"
              />
            </label>
            <label className="block">
              <span className="text-sm"># Personen</span>
              <input
                type="number"
                name="personen"
                min="1"
                className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-sm">Wensen / Idee</span>
            <textarea
              name="idee"
              rows="4"
              className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2"
            ></textarea>
          </label>
          <button
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium tracking-wide bg-white text-black hover:bg-neutral-200 transition"
            type="submit"
          >
            Verstuur
          </button>
        </form>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="border-t border-neutral-800 py-10 bg-black text-neutral-400">
    <div className="container-narrow text-sm flex items-center justify-between">
      <p>© {new Date().getFullYear()} MYTABLE — KVK &amp; BTW volgen</p>
      <a className="hover:text-white" href="#top">Terug naar boven ↑</a>
    </div>
  </footer>
)

export default function App() {
  return (
    <div id="top" className="font-body bg-black text-white">
      <Nav />
      <Hero />
      <Over />
      <Contact />
      <Footer />
    </div>
  )
}
