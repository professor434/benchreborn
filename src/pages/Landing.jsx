import React, { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";

export default function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        alert("Το μήνυμα στάλθηκε!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Κάτι πήγε στραβά.");
      }
    } catch (err) {
      console.error(err);
      alert("Σφάλμα κατά την αποστολή.");
    }
  };

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
        <a
          href="/saas"
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-semibold"
        >
          Go to SaaS Dashboard
        </a>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 max-w-2xl mx-auto bg-gray-50 dark:bg-[#1d1d1d] rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">Επικοινωνία</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Όνομα"
            className="border rounded-md p-2"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border rounded-md p-2"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Μήνυμα"
            className="border rounded-md p-2 h-28"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md"
          >
            Στείλε
          </button>
        </form>
      </section>
    </main>
  );
}
