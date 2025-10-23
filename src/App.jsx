import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ===== HEADER ===== */}
      <header className="relative flex justify-center items-center bg-black py-8">
        <img
          src="/mytablelogo.png"
          alt="MYTABLE Logo"
          className="h-32 md:h-40 object-contain"
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
        <h3 className="text-2xl font-semibold mb-4">Over Yannick & Mij</h3>
        <p className="text-gray-300 leading-relaxed">
          Wij creëren unieke dining experiences die elke gast verrassen.
          Of het nu gaat om private dining, events of exclusieve proeverijen,
          alles draait om sfeer, smaak en beleving.
        </p>
      </section>

      {/* ===== CONTACT / BOEKING ===== */}
      <section id="contact" className="py-20 border-t border-neutral-800 bg-black text-white">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl">Contact</h2>
              <p className="text-neutral-300">Vertel ons je idee.</p>
              <ul className="text-sm text-neutral-300 space-y-1">
                <li>
                  <strong>E-mail:</strong>{" "}
                  <a
                    href="mailto:marienvermeij@gmail.com"
                    className="underline hover:no-underline"
                  >
                    marienvermeij@gmail.com
