import React from "react";
import ThemeToggle from "../components/ThemeToggle";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#121212] text-[#1a1a1a] dark:text-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
  <div className="flex items-center gap-2">
    <img src="/logo.png" alt="BenchReborn Logo" className="h-8" />
    <span className="text-2xl font-bold">BenchReborn</span>
  </div>
  <ThemeToggle />
</header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Το Πρώτο Reborn. Business Reborn.
        </h2>
        <p className="text-xl mb-8">
          Ξαναδίνουμε ζωή και αξία στον επαγγελματικό εξοπλισμό που μένει στα ράφια.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/saas"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-semibold"
          >
            Go to SaaS Dashboard
          </a>
        </div>
      </section>

      {/* Available Tools mock */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Δημοφιλή Εργαλεία</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border rounded-md p-4">
              <img
                src={`/tools/tool${i + 1}.png`}
                alt={`Tool ${i + 1}`}
                className="w-full object-contain h-40 mb-2"
              />
              <h4 className="text-lg font-semibold">Εργαλείο #{i + 1}</h4>
              <p className="text-sm opacity-80">Mock περιγραφικό κείμενο...</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
