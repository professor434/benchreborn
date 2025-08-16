import React from "react";
import ThemeToggle from "../components/ThemeToggle";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#121212] text-[#1a1a1a] dark:text-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">BenchReborn</h1>
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-5xl font-bold tracking-tight mb-4">Tools Reborn. Business Reforged.</h2>
        <p className="text-xl mb-8">Δώσε ξανά ζωή στα επαγγελματικά εργαλεία</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-6 py-3 rounded-md">Δήλωσε Εργαλεία</button>
          <button className="border border-gray-900 dark:border-gray-200 text-lg px-6 py-3 rounded-md">Νοίκιασε Τώρα</button>
        </div>
      </section>

      {/* Available Tools */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Διαθέσιμα Εργαλεία</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card">
              <img
                src={`/tools/tool${i + 1}.png`}
                alt={`Tool ${i + 1}`}
                className="w-full h-40 object-contain mb-4"
              />
              <h4 className="text-xl font-semibold">Εργαλείο {i + 1}</h4>
              <p className="text-sm opacity-80">Μεταχειρισμένο – Πιστοποιημένο – Έτοιμο για χρήση</p>
            </div>
          ))}
        </div>
      </section>

      {/* For Companies */}
      <section className="bg-gray-100 dark:bg-[#1d1d1d] py-12 px-6">
        <h3 className="text-3xl font-bold text-center mb-6">Για Επιχειρήσεις</h3>
        <p className="text-center max-w-3xl mx-auto mb-6">
          Έχετε αχρησιμοποίητα εργαλεία που κάθονται στα ράφια; Δηλώστε τα εύκολα με τη φόρμα εισαγωγής και αφήστε μας να τα
          αξιολογήσουμε και να τα διανείμουμε. Εσείς κερδίζετε – τα εργαλεία αναγεννιούνται.
        </p>
        <div className="max-w-xl mx-auto card">
          <h4 className="text-xl font-semibold mb-4">Φόρμα Εργαλείων</h4>
          <form className="grid gap-4">
            <input placeholder="Επωνυμία Εταιρείας" />
            <input placeholder="Τύπος Εργαλείου" />
            <input placeholder="Κατάσταση / Περιγραφή" />
            <input placeholder="Email Επικοινωνίας" type="email" />
            <button type="submit">Υποβολή</button>
          </form>
        </div>
      </section>
    </main>
  );
}
