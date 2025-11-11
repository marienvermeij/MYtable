import React from "react";
import "./App.css";

const reviews = [
  {
    name: "Sophie",
    rating: 5,
    text: "Een fantastische avond. Alles was tot in de puntjes verzorgd en volledig afgestemd op onze wensen.",
  },
  {
    name: "Jasper",
    rating: 5,
    text: "Topmenu, ontspannen sfeer en super fijne communicatie. Alsof je een restaurant in huis haalt.",
  },
  {
    name: "Lotte",
    rating: 4,
    text: "Heerlijk eten en persoonlijke aandacht. We boekten voor een verjaardag en iedereen was onder de indruk.",
  },
];

function renderStars(rating) {
  return (
    <span className="text-yellow-400">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </span>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ===== HEADER ===== */}
      <header className="relative flex justify-center items-center bg-black py-10">
        <img
          src="/mytablelogo.png"
          alt="MYTABLE Logo"
          className="h-64 md:h-72 object-contain"
        />
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-black overflow-hidden py-12">
        <div className="flex flex-wrap justify-center items-center w-full max-w-7xl mx-auto px-8 gap-8">
          {/* Linker gerecht */}
          <div className="flex-1 flex justify-end max-w-sm">
            <img
              src="/dish1.jpg"
              alt="Gerecht 1"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
          </div>

          {/* Middelste hero-foto met overlay tekst */}
          <div className="relative flex-1 flex justify-center max-w-sm">
            <img
              src="/hero.jpg"
              alt="Hoofdfoto"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                Zorgeloos genieten?
              </h2>
              <a
                href="#contact"
                className="text-lg md:text-xl border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                Vertel ons je idee
              </a>
            </div>
          </div>

          {/* Rechter gerecht */}
          <div className="flex-1 flex justify-start max-w-sm">
            <img
              src="/dish2.jpg"
              alt="Gerecht 2"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
          </div>
        </div>
      </section>

      {/* ===== OVER ONS ===== */}
      <section className="px-12 py-16 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">
          Over Marien Vermeij &amp; Yannick Wilthof
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Wij hebben vier jaar lang samengewerkt in diverse restaurants, waar
          onze liefde voor koken en gastvrijheid is ontstaan. Vooral het
          intieme, persoonlijke karakter van koken bij mensen thuis vinden wij
          het allerleukst. We streven ernaar om elke avond uniek te maken:
          ontspannen, smaakvol en volledig afgestemd op jouw beleving.
        </p>
      </section>

      {/* ===== CONTACT / BOEKING ===== */}
      <section
        id="contact"
        className="py-20 border-t border-neutral-800 bg-black text-white"
      >
        <div className="container mx-auto max-w-4xl px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl">Contact</h2>
              <p className="text-neutral-300">
                Vertel ons je idee — wij nemen snel contact met je op via
                e-mail of telefoon.
              </p>
              <ul className="text-sm text-neutral-300 space-y-1">
                <li>
                  <strong>E-mail:</strong>{" "}
                  <a
                    href="mailto:marienvermeij@gmail.com"
                    className="underline hover:no-underline"
                  >
                    marienvermeij@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Telefoon:</strong>{" "}
                  <a
                    href="tel:0653591134"
                    className="underline hover:no-underline"
                  >
                    06 5359 1134
                  </a>
                </li>
                <li>
                  <strong>Instagram:</strong> @mytable
                </li>
              </ul>
            </div>

            {/* Formspree contact form */}
            <form
              action="https://formspree.io/f/xdkpagnr"
              method="POST"
              className="space-y-4"
            >
              <label className="block">
                <span className="text-sm">Naam</span>
                <input
                  required
                  name="naam"
                  className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2"
                />
              </label>

              <label className="block">
                <span className="text-sm">E-mail</span>
                <input
                  required
                  type="email"
                  name="_replyto"
                  className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2"
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

              <input
                type="hidden"
                name="_next"
                value="https://mytableprivate.netlify.app/bedankt.html"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
              >
                Verstuur
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section
        id="reviews"
        className="py-20 border-t border-neutral-800 bg-black text-white"
      >
        <div className="container mx-auto max-w-5xl px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold">Reviews</h2>
            <div className="text-sm text-neutral-300">
              Gemiddeld{" "}
              <span className="font-semibold">
                4.7/5
              </span>{" "}
              op basis van{" "}
              <span className="font-semibold">
                {reviews.length}
              </span>{" "}
              reviews
            </div>
          </div>

          {/* balk met reviews */}
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">{review.name}</span>
                  {renderStars(review.rating)}
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>

          {/* review formulier */}
          <div className="mt-12 border-t border-neutral-800 pt-8">
            <h3 className="text-xl font-semibold mb-4">Deel jouw ervaring</h3>
            <p className="text-sm text-neutral-300 mb-4">
              Hebben wij bij jou gekookt? Laat een review achter met een
              beoordeling en korte toelichting.
            </p>
            <form
              action="https://formspree.io/f/YOUR_REVIEW_FORM_ID"
              method="POST"
              className="space-y-4 max-w-xl"
            >
              <label className="block">
                <span className="text-sm">Naam</span>
                <input
                  required
                  name="naam"
                  className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2"
                />
              </label>

              <label className="block">
                <span className="text-sm">Beoordeling (1–5 sterren)</span>
                <select
                  name="rating"
                  required
                  className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2"
                >
                  <option value="">Kies een beoordeling</option>
                  <option value="5">5 - Uitstekend</option>
                  <option value="4">4 - Erg goed</option>
                  <option value="3">3 - Prima</option>
                  <option value="2">2 - Matig</option>
                  <option value="1">1 - Ontevreden</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm">Review</span>
                <textarea
                  name="review"
                  rows="4"
                  className="mt-1 w-full rounded-xl border border-neutral-700 bg-black text-white px-3 py-2"
                  placeholder="Hoe heb je de avond ervaren?"
                ></textarea>
              </label>

              <input
                type="hidden"
                name="_next"
                value="https://mytableprivate.netlify.app/bedankt.html"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
              >
                Verstuur review
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-neutral-800 py-10 bg-black text-neutral-400">
        <div className="container mx-auto max-w-4xl text-sm flex items-center justify-between px-6">
          <p>© {new Date().getFullYear()} MYTABLE — KVK &amp; BTW volgen</p>
          <a className="hover:text-white" href="#top">
            Terug naar boven ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
