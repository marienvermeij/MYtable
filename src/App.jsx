import React from 'react'

const Nav = () => (
  <header className="sticky top-0 z-40 bg-black/80 backdrop-blur border-b border-neutral-800 text-white">
    <nav className="container-narrow flex items-center justify-between h-16">
      <a href="#" className="font-display text-2xl tracking-wide">
        <span className="font-semibold">MY</span><span>TABLE</span>
        {/* TODO: later: handtekeningen naast M en Y als SVG */}
      </a>
      <ul className="flex items-center gap-6 text-sm">
        <li><a href="#over" className="hover:opacity-70">Over ons</a></li>
        <li><a href="#contact" className="hover:opacity-70">Contact</a></li>
        <li>
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium tracking-wide bg-white text-black hover:bg-neutral-200 transition">
            Boek nu
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

/**
 * HERO — volle breedte foto (plaats jouw foto in /public/hero.jpg).
 * Tekst op de foto: “Zorgeloos genieten?” + CTA “Vertel ons je idee”.
 */
const Hero = () => (
  <section className="relative bg-black text-white">
    <div className="h-[78vh] min-h-[520px] grid">
      {/* ACHTERGRONDFOTO */}
      <div className="absolute inset-0">
        {/* Zet jouw foto als /public/hero.jpg. Als je nog geen foto hebt blijft het zwart. */}
        <div className="h-full w-full bg-black bg-[url('/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* TEKST + CTA */}
      <div className="relative container-narrow flex flex-col gap-5 justify-center">
        <p className="tracking-wide text-base text-neutral-200">Zorgeloos genieten?</p>
        <div className="flex gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium tracking-wide border border-white text-white hover:bg-white hover:text-black transition"
          >
            Vertel ons je idee
          </a>
        </div>
      </div>
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
        <h2 className="font-display text-3xl">Wij zijn Marien &amp; Yannick</h2>
        <p className="text-neutral-300 leading-relaxed">
          We koken al jaren in verschillende keukens en brengen die ervaring naar jouw tafel.
          Met seizoensproducten, aandacht voor detail en een warme, persoonlijke service.
        </p>
        <p className="text-neutral-300 leading-relaxed">
          Onze missie: jouw idee vertalen naar een menu en beleving die klopt. Intiem, stijlvol en smaakvol.
        </p>
        <div className="flex gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium tracking-wide border border-white text-white hover:bg-white hover:text-black transition">
            Plan een gesprek
          </a>
        </div>
      </div>
    </div>
  </section>
)

/* KAARTEN/FAQ ZIJN VOLLEDIG VERWIJDERD VOLGENS JOUW OPDRACHT */

const Contact = () => (
  <section id="contact" className="py-20 border-t border-neutral-800 bg-black text-white">
    <div className="container-narrow">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="font-display text-3xl">Contact</h2>
          <p className="text-neutral-300">vertel ons je idee.</p>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li><strong>E-mail:</strong> <a className="underline hover:no-underline" href="mailto:marienvermeij@gmail.com">marienvermeij@gmail.com</a></li>
            <li><strong>Telefoon:</strong> <a className="underline hover:no-underline" href="tel:0653591134">06 5359 1134</a></li>
            <li><strong>Instagram:</strong> @mytable</li>
          </ul>
        </div>
        {/* Netlify Forms */}
        <form name="contact" method="POST" data-netlify="true" className="space-y-4">
          <input type="hidden" name="form-name" value="contact" />
          <label className="block">
            <span className="text-sm">Naam</span>
            <input required name="naam" className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2 placeholder-neutral-500" />
          </label>
          <label className="block">
            <span className="text-sm">E-mail</span>
            <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2 placeholder-neutral-500" />
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm">Datum</span>
              <input type="date" name="datum" className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2" />
            </label>
            <label className="block">
              <span className="text-sm"># Personen</span>
              <input type="number" name="personen" min="1" className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2" />
            </label>
          </div>
          <label className="block">
            <span className="text-sm">Wensen / Idee</span>
            <textarea name="idee" rows="4" className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2"></textarea>
          </label>
          <button className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium tracking-wide bg-white text-black hover:bg-neutral-200 transition" type="submit">
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
