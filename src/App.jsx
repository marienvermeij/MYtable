import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar met logo in het midden */}
      <header className="relative flex justify-center items-center bg-black py-4">
        <img
          src="/mytablelogo.png"
          alt="MYTABLE Logo"
          className="h-12 md:h-16 object-contain"
        />
      </header>

      {/* Hero Section met 3 foto's */}
      <section className="relative flex justify-center items-center bg-black overflow-hidden py-12">
        <div className="flex justify-center items-center w-full max-w-7xl px-8 gap-8">
          {/* Linker gerecht */}
          <div className="flex-1 flex justify-end">
            <img
              src="/dish1.jpg"
              alt="Gerecht 1"
              className="rounded-2xl shadow-lg object-cover w-full max-w-md"
            />
          </div>

          {/* Middelste hoofd-foto met overlay tekst */}
          <div className="relative flex-1 flex justify-center">
            <img
              src="/mytablelogo.png"
              alt="Hoofdfoto"
              className="rounded-2xl shadow-lg object-cover w-full max-w-md"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40 rounded-2xl">
              <h2 className="text-3xl font-semibold mb-2">Zorgeloos genieten?</h2>
              <p className="text-lg">Vertel ons je idee</p>
            </div>
          </div>

          {/* Rechter gerecht */}
          <div className="flex-1 flex justify-start">
            <img
              src="/dish2.jpg"
              alt="Gerecht 2"
              className="rounded-2xl shadow-lg object-cover w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Yannick & Marien sectie */}
      <section className="px-12 py-16 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Over Yannick & Mij</h3>
        <p className="text-gray-300 leading-relaxed">
          Wij creëren unieke dining experiences die elke gast verrassen.
          Of het nu gaat om private dining, events of exclusieve proeverijen,
          alles draait om sfeer, smaak en beleving.
        </p>
      </section>
    </div>
  );
}

export default App;
