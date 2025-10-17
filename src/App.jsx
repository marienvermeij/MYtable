
import React from 'react'

const Nav = () => (
  <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-neutral-200">
    <nav className="container-narrow flex items-center justify-between h-16">
      <a href="#" className="font-display text-2xl tracking-wide">
        <span className="font-semibold">MY</span><span className="text-accent">TABLE</span>
        {/* TODO: later: handtekeningen naast M en Y als SVG */}
      </a>
      <ul className="flex items-center gap-6 text-sm">
        <li><a href="#over" className="hover:text-accent">Over ons</a></li>
        <li><a href="#contact" className="hover:text-accent">Contact</a></li>
        <li><a href="#aanbod" className="hover:text-accent">Aanbod</a></li>
        <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
        <li><a href="#contact" className="btn-primary">Boek nu</a></li>
      </ul>
    </nav>
  </header>
)

const Hero = () => (
  <section className="relative">
    <div className="h-[72vh] min-h-[520px] grid">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1534938665420-419933f6df09?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative container-narrow flex flex-col gap-6 justify-center">
        <h1 className="text-white font-display text-5xl md:text-6xl leading-tight max-w-3xl">
          Intieme <span className="text-accent">private dining</span> aan huis
        </h1>
        <p className="text-white/90 max-w-2xl">
          Vertel ons je idee — wij verzorgen een onvergetelijke avond bij jou thuis.
        </p>
        <div className="flex gap-3">
          <a href="#contact" className="btn-primary">Vertel ons je idee</a>
          <a href="#over" className="btn-outline bg-white/70 backdrop-blur">Over ons</a>
        </div>
      </div>
    </div>
  </section>
)

const Over = () => (
  <section id="over" className="py-20 border-t border-neutral-200">
    <div className="container-narrow grid md:grid-cols-[1fr_2fr] gap-10 items-start">
      <div className="aspect-[3/4] rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-400">
        <span className="text-6xl">🍷</span>
      </div>
      <div className="space-y-6">
        <h2 className="font-display text-3xl">Wij zijn Marien &amp; Yannick</h2>
        <p className="text-neutral-700 leading-relaxed">
          We koken al jaren in verschillende keukens en brengen die ervaring naar jouw tafel. 
          Met seizoensproducten, aandacht voor detail en een warme, persoonlijke service.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Onze missie: jouw idee vertalen naar een menu en beleving die klopt. Intiem, stijlvol en smaakvol.
        </p>
        <div className="flex gap-3">
          <a href="#aanbod" className="btn-outline">Bekijk ons aanbod</a>
          <a href="#contact" className="btn-primary">Plan een gesprek</a>
        </div>
      </div>
    </div>
  </section>
)

const Card = ({ title, children }) => (
  <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm hover:shadow transition">
    <h3 className="font-display text-xl mb-2">{title}</h3>
    <p className="text-sm text-neutral-700">{children}</p>
  </div>
)

const Aanbod = () => (
  <section id="aanbod" className="py-20 border-t border-neutral-200">
    <div className="container-narrow">
      <div className="flex items-end justify-between mb-10">
        <h2 className="font-display text-3xl">Aanbod</h2>
        <a href="#contact" className="text-sm underline hover:no-underline">Meer weten? →</a>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Chef aan huis">
          Meergangen fine dining in jouw woonkamer. Wij regelen alles: mise-en-place, service, afwas.
        </Card>
        <Card title="Tasting menu">
          5–7 gangen met wijnpairing op verzoek. Vegetarisch of allergenen? Geen probleem.
        </Card>
        <Card title="Private events">
          Verjaardagen, huwelijksaanzoeken of intieme business-diners. Op maat gemaakt.
        </Card>
      </div>
    </div>
  </section>
)

const FAQ = () => (
  <section id="faq" className="py-20 border-t border-neutral-200">
    <div className="container-narrow">
      <h2 className="font-display text-3xl mb-8">FAQ</h2>
      <div className="space-y-4">
        <details className="rounded-xl border border-neutral-200 p-4">
          <summary className="cursor-pointer font-medium">Voor hoeveel personen koken jullie?</summary>
          <p className="mt-2 text-sm text-neutral-700">Ideaal tussen 2 en 12 personen. Groter in overleg.</p>
        </details>
        <details className="rounded-xl border border-neutral-200 p-4">
          <summary className="cursor-pointer font-medium">Wat zijn de prijzen?</summary>
          <p className="mt-2 text-sm text-neutral-700">Afhankelijk van gangen, ingrediënten en service. Indicatie vanaf €65 p.p. Neem contact op voor een voorstel.</p>
        </details>
        <details className="rounded-xl border border-neutral-200 p-4">
          <summary className="cursor-pointer font-medium">Doen jullie ook wijnpairing?</summary>
          <p className="mt-2 text-sm text-neutral-700">Ja, op verzoek werken we met bijpassende wijnen of alcoholvrije pairings.</p>
        </details>
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section id="contact" className="py-20 border-t border-neutral-200">
    <div className="container-narrow">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="font-display text-3xl">Contact</h2>
          <p className="text-neutral-700">Vertel ons je idee. We reageren meestal binnen 24 uur.</p>
          <ul className="text-sm text-neutral-700">
            <li><strong>E-mail:</strong> info@mytable.example</li>
            <li><strong>Instagram:</strong> @mytable</li>
          </ul>
        </div>
        {/* Netlify Forms ready */}
        <form name="contact" method="POST" data-netlify="true" className="space-y-4">
          <input type="hidden" name="form-name" value="contact" />
          <label className="block">
            <span className="text-sm">Naam</span>
            <input required name="naam" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" />
          </label>
          <label className="block">
            <span className="text-sm">E-mail</span>
            <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" />
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm">Datum</span>
              <input type="date" name="datum" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" />
            </label>
            <label className="block">
              <span className="text-sm"># Personen</span>
              <input type="number" name="personen" min="1" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" />
            </label>
          </div>
          <label className="block">
            <span className="text-sm">Wensen / Idee</span>
            <textarea name="idee" rows="4" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"></textarea>
          </label>
          <button className="btn-primary" type="submit">Verstuur</button>
        </form>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="border-t border-neutral-200 py-10">
    <div className="container-narrow text-sm flex items-center justify-between">
      <p>© {new Date().getFullYear()} MYTABLE — KVK &amp; BTW volgen</p>
      <a className="hover:text-accent" href="#top">Terug naar boven ↑</a>
    </div>
  </footer>
)

export default function App() {
  return (
    <div id="top" className="font-body">
      <Nav />
      <Hero />
      <Over />
      <Aanbod />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
