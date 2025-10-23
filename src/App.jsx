import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <header className="flex justify-between items-center px-8 py-4 bg-black">
        <h1 className="text-2xl font-bold tracking-wide">MYTABLE</h1>
      </header>

      {/* Hero Section */}
      <section className="relative flex justify-center items-center bg-black overflow-hidden py-12">
        <div className="flex justify-center items-center w-full max-w-7xl px-8 gap-8">
          {/* Left dish image */}
          <div className="flex-1 flex justify-end">
            <img
              src="/dish1.jpg"
              alt="Gerecht 1"
              className="rounded-2xl shadow-lg object-cover w-full max-w-md"
            />
          </div>

          {/* Center main image with overlay text */}
          <div className="relative flex-1 flex justify-center">
            <img
              src="/mainphoto.svg"
              alt="Hoofdfoto"
              className="rounded-2xl shadow-lg object-cover w-full max-w-md"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40 rounded-2xl">
              <h2 className="text-3xl font-semibold mb-2">Zorgeloos genieten?</h2>
              <p className="text-lg">Vertel ons je idee</p>
            </div>
          </div>

          {/* Right dish image */}
          <div className="flex-1 flex justify-start">
            <img
              src="/dish2.jpg"
              alt="Gerecht 2"
              className="rounded-2xl shadow-lg object-cover w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Yannick & Jij section */}
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
