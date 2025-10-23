import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header met groter logo */}
      <header className="relative flex justify-center items-center bg-black py-8">
        <img
          src="/mytablelogo.png"
          alt="MYTABLE Logo"
          className="h-20 md:h-24 object-contain"
        />
      </header>

      {/* Hero sectie met 3 foto's van gelijke grootte */}
      <section className="relative bg-black overflow-hidden py-12">
        <div className="flex justify-center items-center w-full max-w-7xl mx-auto px-8 gap-8">
          {/* Linker foto */}
          <div className="flex-1 flex justify-end">
            <img
              src="/dish1.jpg"
              alt="Gerecht 1"
              className="rounded-2xl shadow-lg object-cover w-full max-w-md aspect-[4/5]"
            />
          </div>

          {/* Middelste foto met overlay tekst */}
          <div className="relative flex-1 flex justify-center">
            <img
              src="/hero.jpg"
              alt="Hoofdfoto"
              className="rounded-2xl shadow-lg object-cover w-full max-w-md aspect-[4/5]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold mb-2">
                Zorgeloos genieten?
              </h2>
